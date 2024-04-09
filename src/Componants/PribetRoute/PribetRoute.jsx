import UseAuth from "../../Hooks/UseAuth";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const PribetRoute = ({children}) => {

    const {user} = UseAuth();
    const location = useLocation();

    if(!user){
        return <Navigate to="/login" state={location?.pathname || '/'}/>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PribetRoute;