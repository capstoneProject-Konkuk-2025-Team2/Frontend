import {Outlet} from "react-router-dom";

const AuthLayout = () =>{
    return(
        <>
            <main>
                <Outlet/> {/* LoginPage, SignupPage 등이 여기에 렌더링됨 */}
            </main>
            <div> 로그인,회원가입 용 Auth Layout </div>
        </>
    )
}
export default AuthLayout;