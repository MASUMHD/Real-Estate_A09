import { Outlet } from "react-router-dom";
import NavBar from "../Componants/NavBar";
import Footer from "../Componants/Footer";

const AllWebPaj = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <NavBar />
            <Outlet />
            <Footer/>
        </div>
    );
};

export default AllWebPaj;