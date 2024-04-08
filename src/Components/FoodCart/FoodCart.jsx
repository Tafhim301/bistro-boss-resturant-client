
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";


const FoodCart = ({ item }) => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const [,refetch] = useCart();
  
    const navigate = useNavigate();
    const {image,price,recipe,name,_id} = item
    const location = useLocation();
    const handleAddToCart = () =>{
       
        if(user && user.email){
         const cartItem = {
            menuId: _id,
            email: user.email,
            name,
            image,
            price,

         }
         axiosSecure.post('/carts',cartItem)
         .then(res => {
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({
                  
                    icon: "success",
                    title: `${name} has been added to your cart`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                refetch();
            }
        });

        }
        else{
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login!"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login',{state:{from : location}})
                 
                }
              });
        }
    }
    return (
        <div className="card rounded-none  bg-base-100 shadow-xl">
            <figure><img className="w-full h-80" src={image} alt="Shoes" /></figure>
            <p className="text-center bg-black py-2 mt-2 text-white absolute right-0 mr-3 px-4">${price}</p>
            <div className="card-body bg-gray-100">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(item)} className="btn text-yellow-600 uppercase border-yellow-600 border-x-0 border-t-0 border-b-2 hover:bg-black bg-gray-200">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;