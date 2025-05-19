import {createBrowserRouter} from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage.tsx";
import SignupPage from "../pages/auth/SignupPage.tsx";
import NotFound from "../pages/NotFound.tsx";
import AuthLayout from "../layouts/AuthLayout.tsx";
import LandingPage from "../pages/auth/LandingPage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <NotFound />,
        children:[
            {
                element: <AuthLayout/>,
                children: [
                    {
                        path:'',
                        element: <LandingPage />
                    },
                    {
                        path:'login',
                        element: <LoginPage />
                    },
                    {
                        path:'signup',
                        element: <SignupPage />
                    },
                ]
            }
        ]
    }
])

export default router