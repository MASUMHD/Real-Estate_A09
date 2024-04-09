import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Componants/Pajass/Home";
import AllWebPaj from "./AllWebPaj/AllWebPaj";
import UpdateProfile from "./Componants/Pajass/UpdateProfile";
import Profile from "./Componants/Pajass/Profile";
import Login from "./Componants/Pajass/Login";
import Register from "./Componants/Pajass/Register";
import NotFound from "./Componants/Pajass/NotFound";
import ViewProperty from "./Componants/Pajass/ViewProperty";
import FirebaseProvider from "./FirebaseProvider/FirebaseProvider";
import PribetRoute from "./Componants/PribetRoute/PribetRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AllWebPaj/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader:() => fetch("/fackData.json"),
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile/>
      },
      {
        path:"/profile",
        element:<Profile/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/details/:id",
        element:<PribetRoute>
          <ViewProperty/>
        </PribetRoute>,
        loader:() => fetch("/fackData.json")
      }
      
      
    ],
    
  },
  {
    path:"*",
    element:<NotFound/>
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>
);
