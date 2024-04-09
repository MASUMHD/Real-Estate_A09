import { FaGoogle } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import UseAuth from "../Hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const SocalLogin = () => {

    const {googleLogin, gitHubLogin} = UseAuth();

    // navigation system
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/'

    const handalSocialLogin = socialProvider => {
        socialProvider()
        .then(result => {
            if(result.user){
                navigate(from)
            }
            Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Login Successful",
                showConfirmButton: false,
                timer: 1500
            });
        })
    }
    return (
        <div>
            
            <div className="text-center mb-5 mt-5">
                <h1 className="text-3xl font-bold">Social Login</h1>
            </div>
            <button 
            onClick={() => handalSocialLogin(googleLogin)}
            className="w-full btn btn-outline btn-info text-xl"><FaGoogle />Login with Google</button>

            <button 
            onClick={ () => handalSocialLogin(gitHubLogin)}
            className="w-full mt-4 btn btn-outline  text-xl"><BsGithub />Login with GitHub</button>
        </div>
    );
};

export default SocalLogin;