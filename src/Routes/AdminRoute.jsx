import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";


const AdminRoute = ({children}) => {
    const {user,loading} = useAuth();
    const [isAdmin,isAdminLoading] = useAdmin();
    const location = useLocation();
    
    if (loading || isAdminLoading){
        return <div className="justify-center items-center flex mt-6 ">
        <span className="loading-spinner loading loading-md"></span>
    </div>;
    }
    if (user || isAdmin){
        return children;
    }
    return (
        <Navigate state={{from : location}} to={'/login'}></Navigate>
    );
};

export default AdminRoute;