import NavBar from "@/components/blocks/NavBar.tsx";
import {Outlet} from "react-router-dom";
import Footer from "@/components/blocks/Footer.tsx";

const AppLayout = () => {
    return (
        <main className="w-full bg-[#ffffff] dark:bg-[#181A2A]">
            <NavBar />
            <Outlet />
            <Footer />
        </main>
    );
};
export default AppLayout;
