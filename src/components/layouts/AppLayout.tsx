import NavBar from "@/components/blocks/NavBar.tsx";
import {Outlet} from "react-router-dom";
import Footer from "@/components/blocks/Footer.tsx";
import {useState} from "react";
import {ToastContainer} from "react-toastify";

const AppLayout = () => {
    const [darkMode, setDarkMode] = useState<boolean>((()=> localStorage.getItem("darkMode")==="true"));

    const toggleDarkMode = () => {
        setDarkMode(prev => {
            const next = !prev;
            localStorage.setItem("darkMode", next.toString());
            return next;
        });
    };

    return (
        <div className={darkMode ? "dark" : ""}>
            <main className="w-full bg-[#ffffff] dark:bg-[#181A2A]">
                <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <ToastContainer />
                <Outlet />
                <Footer darkMode={darkMode} />
            </main>

        </div>
    );
};
export default AppLayout;
