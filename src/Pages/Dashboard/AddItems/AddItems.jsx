import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils, } from "react-icons/fa6";
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting__api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const {
        register,
        handleSubmit,
        reset,


    } = useForm();

    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting__api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(res.data)
        if (res.data.success) {
            reset();
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url

            }
            const menuRes = await axiosSecure.post('/menu',menuItem)
            console.log(menuRes.data);
            if(menuRes.data.insertedId){
                Swal.fire({
                  
                    icon: "success",
                    title: `${data.name} has been successfully added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
    }

    return (
        <div>
            <SectionTitle heading={'Add an Item'} subHeading={"What's New"}></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label className="form-control my-6 w-full ">
                    <div className="label">
                        <span className="label-text">Reciepe Name*</span>

                    </div>
                    <input {...register("name", { required: true })} required type="text" placeholder="Reciepe Name" className="input input-bordered w-full" />

                </label>


                <div className="flex w-full  gap-2">

                    <div className="flex-1">
                        <div className="label">
                            <span className="label-text">Category*</span>

                        </div>
                        <select defaultValue={"default"} {...register('category', { required: true })} className="select select-bordered w-full">
                            <option disabled value={'default'}>Select a category</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drinks</option>

                        </select>
                    </div>
                    <div className="flex-1">
                        <label className="form-control  ">
                            <div className="label">
                                <span className="label-text">Price*</span>

                            </div>
                            <input {...register("price", { required: true })} type="text" placeholder="Price" className="input input-bordered w-full" />

                        </label>
                    </div>


                </div>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Reciepe Details</span>

                    </div>
                    <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Reciepe Details"></textarea>

                </label>
                <div className="my-6 ">
                    <input {...register('image', { required: true })} type="file" className="file-input  w-full max-w-xs" />
                </div>
                <button className="btn">
                    Add Item <FaUtensils></FaUtensils>
                </button>
            </form>


        </div>
    );
};

export default AddItems;