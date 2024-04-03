import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        
        formState: { errors },
      } = useForm();
      const onSubmit = data =>{
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
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
                        <input type="text" {...register('name',{ required: true})} name="name" placeholder="Your Name" className="input input-bordered" />
                        {errors.name && <span>This field is required</span>}
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
                        <input type="password"  {...register('password',{ required: true,minLength:6,maxLength:20})} name="password" placeholder="password" className="input input-bordered" required />
                        {errors.password?.type === 'required' && <p  className="">password is required</p>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                  

                    <div className="form-control mt-6">
                        <input type="submit"  className={'btn  btn-primary'} value="Sign Up" />
                        
                    </div>
                </form>
                <p className='text-center p-2'><small>Already Have An Account?<Link className='font-bold text-blue-500' to={'/login'}>Login Now</Link></small></p>
            </div>
        </div>
    </div>F</>
    );
};

export default SignUp;