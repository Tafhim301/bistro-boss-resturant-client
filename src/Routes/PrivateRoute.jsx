import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,loading} = useContext(AuthContext);
    if (loading){
        return <span className="loading-spinner text-center"></span>;
    }
    if (user){
        return children;
    }
    return (
        <Navigate state={{from : location}} to={'/login'}></Navigate>
    );
};

export default PrivateRoute;