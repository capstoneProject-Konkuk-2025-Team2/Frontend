import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage.tsx";
import SignupPage from "../pages/auth/SignupPage.tsx";
import NotFound from "../pages/NotFound.tsx";
import AuthLayout from "../layouts/AuthLayout.tsx";
import LandingPage from "../pages/auth/LandingPage.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import TimeTablePage from "../pages/timetable/TimeTablePage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        // element: <Navigate to="/auth" replace />,
        errorElement: <NotFound />,
        children: [
            {
                path: 'auth',
                element: <AuthLayout />,
                children: [
                    {
                        path: '',
                        // index: true,
                        element: <LandingPage />
                    },
                    {
                        path: 'login',
                        element: <LoginPage />
                    },
                    {
                        path: 'signup',
                        element: <SignupPage />
                    },
                ]
            },
            {
                path: 'main',
                element: <MainLayout />,
                children: [
                    {
                        path: 'timetable',
                        element: <TimeTablePage />
                    }
                ]
            }
        ]
    }
])

export default router