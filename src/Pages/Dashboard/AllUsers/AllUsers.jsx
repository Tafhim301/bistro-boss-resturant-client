import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdDeleteForever } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [],refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                Swal.fire({
                  
                    icon: "success",
                    title: `${user.name} is an Admin Now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                refetch();

            }
        })
    }
    const handleDeleteUser = id =>{
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
            axiosSecure.delete(`/users/${id}`)
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
    return (
        <div>
            <div className="flex justify-between my-4">
                <h2 className="text-3xl">All Users</h2>

                <h2 className="text-3xl">Total Users:{users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,idx)=>
                                <tr key={idx}>
                                    <th>{idx + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role === 'admin'?"Admin":<button onClick={()=>handleMakeAdmin(user)} className="btn bg-orange-400 btn-md"><FaUsers className="text-white text-2xl"></FaUsers> </button>}</td>
                                    <td><button onClick={() => handleDeleteUser(user._id)} className="btn btn-ghost btn-xs"><MdDeleteForever className="text-3xl text-red-800" /></button></td>
                                </tr>
                              
                            )
                        }
                        {/* row 1 */}
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default AllUsers;