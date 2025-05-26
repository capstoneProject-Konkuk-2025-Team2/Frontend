import { Outlet } from "react-router-dom";
import LowerNav from "../components/LowerNav.tsx";
import ChatBotButton from "../components/ChatBotButton.tsx";

const MainLayout = () => {
    return (
        <>
            <main className="relative flex flex-col justify-between w-[390px] min-h-[844px] bg-[#f6f6f6]">
                <Outlet /> {/* 캘린더, 시간표, 리뷰, 마이페이지 등 등이 여기에 렌더링됨 */}
                <ChatBotButton />
                <LowerNav />
            </main>
        </>
    )
}
export default MainLayout;