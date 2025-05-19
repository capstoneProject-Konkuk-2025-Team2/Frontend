import {createBrowserRouter} from "react-router-dom";
import Login from "../pages/auth/Login.tsx";
import Signup from "../pages/auth/Signup.tsx";
import NotFound from "../pages/NotFound.tsx";
import AuthLayout from "../layouts/AuthLayout.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <NotFound />,
        children:[
            {
                element: <AuthLayout/>,
                children: [
                    {
                        path:'login',
                        element: <Login/>
                    },
                    {
                        path:'signup',
                        element: <Signup/>
                    },
                ]
            }
        ]
    }
])

export default router