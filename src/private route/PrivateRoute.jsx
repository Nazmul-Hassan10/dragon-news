import { useContext } from "react";
import { AuthContext } from "../Components/provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location.state);

    if(loading){
        return <div className="h-[100vh] flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
    }

    if(user){
        return children
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;