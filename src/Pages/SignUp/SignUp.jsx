import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";


const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                       const userInfo = {
                        name : data.name,
                        email : data.email,


                       } 
                        axiosPublic.post('/users',userInfo)
                        .then(res => {
                            console.log(res)
                            if(res.data.insertedId){
                                
                                console.log('user profile Info updated')
                                reset();
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "User signed Up successfully",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/');
                            }
                        })

                    })
                    .catch(error => console.error(error))
            })
    }



    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register('name', { required: true })} name="name" placeholder="Your Name" className="input input-bordered" />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register('photoURL', { required: true })} name="photoURL" placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register('email')} name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register('password', { required: true, minLength: 6, maxLength: 20 })} name="password" placeholder="password" className="input input-bordered" required />
                                {errors.password?.type === 'required' && <p className="">password is required</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>


                            <div className="form-control mt-6">
                                <input type="submit" className={'btn  btn-primary'} value="Sign Up" />

                            </div>
                        </form>
                        <p className='text-center p-2'><small>Already Have An Account?<Link className='font-bold text-blue-500' to={'/login'}>Login Now</Link></small></p>
                        <div className="divider"></div>
                       <div className="flex justify-center pb-2">
                       <SocialLogin></SocialLogin>
                       </div>
                        
                    </div>
                </div>
            </div></>
    );
};

export default SignUp;