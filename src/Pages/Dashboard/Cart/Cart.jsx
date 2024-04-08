
import { MdDeleteForever } from "react-icons/md";
import useCart from "../../../Hooks/useCart";

import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";


const Cart = () => {
    const [cart,refetch] = useCart(); 
    const axiosSecure = useAxiosSecure();
    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            axiosSecure.delete(`carts/${id}`)
            .then(res => {
                console.log(res.data);
                if(res.data.deletedCount > 0){

                    Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success"
                    });
                    refetch();
                }

            })
            }
          });
       

    }
    
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    return (
        <div>
            <div className="flex justify-around mb-5">
                <h2 className="text-4xl">Items:{cart.length} </h2>
                <h2 className="text-4xl">Total Price:{totalPrice} </h2>
               {cart.length?<Link  to={'/dashboard/payment'}> <button className="btn bg-orange-400">Pay</button></Link>:<button disabled className="btn bg-orange-400">Pay</button>}
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                               #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item,idx) =>    <tr key={item._id}>
                               
                                <th>
                                    {
                                        idx+1
                                    }
                                  
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img className="" src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>
                                <td>
                                  <p className="text-sm font-semibold">{item.name}</p>
                                </td>
                                <td className="font-bold">${item.price}</td>
                                <th>
                                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs"><MdDeleteForever className="text-2xl text-red-800" /></button>
                                </th>
                            </tr> )
                        }
                    
                        
                    </tbody>
                   
                </table>
            </div>
        </div>
    );
};

export default Cart;