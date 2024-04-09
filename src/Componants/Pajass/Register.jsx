import { useState } from "react";
import { Link } from "react-router-dom";

import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {

    const [ShowPassword, setShowPassword] = useState(false);


  return (
    <div className="p-3">
      <div className="mx-auto flex mt-5 border-gray-600 border-2 flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-2 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm dark:text-gray-600">
            Sign in to access your account
          </p>
        </div>
        <form noValidate="" action="" className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
              Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                fdprocessedid="kkg7uk"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
              Photo URL
              </label>
              <input
                type="text"
                name="text"
                id="photoURL"
                placeholder="Photo URL"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline dark:text-gray-600"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type={ShowPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                fdprocessedid="q3wrnj"
              />
              <span
              className="absolute text-slate-400 mt-2 text-2xl -ml-8"
              onClick={() => setShowPassword(!ShowPassword)}
            >
              {ShowPassword ? <FaEyeSlash /> : <FaRegEye />}
            </span>
            </div>
            <div>
                <button className="btn w-full bg-emerald-300">Sign Up</button>
            </div>
          </div>
          
        </form>
        <div className="space-y-2 mt-8">
            
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Don't have an account yet?
              <Link
                rel="noopener noreferrer"
                to="/login"
                className="hover:underline dark:text-default-600"
              >
                Log In
              </Link>
              .
            </p>
          </div>
      </div>
    </div>
  );
};

export default Register;
