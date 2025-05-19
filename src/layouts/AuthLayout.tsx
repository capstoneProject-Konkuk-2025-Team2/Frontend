import {Outlet} from "react-router-dom";

const AuthLayout = () =>{
    return(
        <>
            <main>
                <Outlet/> {/* LoginPage, SignupPage 등이 여기에 렌더링됨 */}
            </main>
            로그인, 회원가입 용 레이아웃(하단바❌)
        </>
    )
}
export default AuthLayout;