import { Link } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const Profile = () => {
  const { user } = UseAuth();

  if (!user) {
    return <div>No user data available. Please log in.</div>;
  }

  return (
    <div className="mt-8 p-3">
      <div className="border-2 border-slate-500 h-[550px] md:w-1/2 text-center mx-auto rounded-2xl p-10">
        <div className="text-center items-center justify-center ">
          <img
            className="w-40 h-40 text-center ml-20 md:ml-40 rounded-full"
            src={user.photoURL}
            alt=""
          />
        </div>
        <div className="mt-6 md:mt-10">
          <h1 className="text-3xl mt-4">
            <span className="font-extrabold text-2xl">Name :</span>{" "}
            {user.displayName}
          </h1>
          <h1 className="text-xl md:text-3xl mt-4">
            <span className="font-extrabold text-2xl">Email :</span>{" "}
            {user.email}
          </h1>
          <h1 className="text-[10px] md:text-sm mt-4">
            <span className="font-extrabold text-2xl">Photo URL :</span>{" "}
            {user?.photoURL}
          </h1>
          
        </div>
        <div className="mt-4 md:mt-10">
          <Link to="/updateProfile">
            <button className="bg-blue-500 w-2/3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full btn">
              Update Your Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
