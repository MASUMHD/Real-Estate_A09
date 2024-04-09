import { useState } from "react";
import { Link } from "react-router-dom";

import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import UseAuth from "../../Hooks/UseAuth";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = UseAuth();
  // console.log(createUser);
  const [ShowPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // navigation system
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const onSubmit = (data) => {
    const { email, password } = data;

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter");
      return;
    }

    createUser(email, password)
      // .then((result) => {
      // console.log(result);
      // });
      .then((result) => {
        if (result.user) {
          navigate(from);
        }

        
        // sweet alert

        let timerInterval;
        Swal.fire({
          title: "User created successfully!",
          html: "I will close in <b></b> milliseconds.",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
      })
      .catch((error) => {
        console.log(error);
        setPasswordError(error.message);
      });
  };

  return (
    <div className="p-3">
      <div className="mx-auto flex mt-5 border-gray-600 border-2 flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-2 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm dark:text-gray-600">
            Sign in to access your account
          </p>
        </div>
        <form
          noValidate=""
          action=""
          className="space-y-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                id="name"
                placeholder="name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                {...register("name", { required: true })}
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
                required
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                fdprocessedid="kkg7uk"
                {...register("email", { required: true })}
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
                {...register("photoURL")}
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
                required
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
                fdprocessedid="q3wrnj"
                {...register("password", { required: true })}
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
            {passwordError && (
              <p className="text-red-500 text-center">{passwordError}</p>
            )}
          </div>
        </form>
        <div className="space-y-2 mt-8">
          <p className="px-6 text-sm text-center dark:text-gray-600">
            Don't have an account yet?
            <Link
              rel="noopener noreferrer"
              to="/login"
              className="hover:underline dark:text-default-600 text-blue-600 font-bold"
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
