import {Outlet, useLocation} from "react-router-dom";

const AuthLayout = () =>{
    const location = useLocation()

    return(
        <>
            {location.pathname === '/' ? <div>루트 페이지</div> : null}

            <main className="w-[390px] min-h-[844px] bg-[#f6f6f6]">
                <Outlet/> {/* LoginPage, SignupPage 등이 여기에 렌더링됨 */}
            </main>
        </>
    )
}
export default AuthLayout;

