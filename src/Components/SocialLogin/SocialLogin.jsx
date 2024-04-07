import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";



const SocialLogin = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()
    const {googleSignIn} = useAuth();
    let from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result => {
            console.log(result.user);
            const userInfo ={
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res => {
                console.log(res.data);
             
                Swal.fire({
                    title: "User Logged In Successfully",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
                  navigate(from, {replace : true})
            })
           
        })
        

    

    }
    return (
        <div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn">
                    <FaGoogle></FaGoogle> 
                    Google
                </button>
            </div>
            
        </div>
    );
};

export default SocialLogin;