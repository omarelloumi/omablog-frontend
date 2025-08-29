import ResponsiveNavBar from "./ResponsiveNavBar";
import { useState } from "react";
import {HiMenu} from "react-icons/hi";
import {ThemeSwitch} from "@/components/ui/ThemeSwitch.tsx";
import LogoLight from "@/assets/LogoLight.tsx";
import {Link, NavLink} from "react-router-dom";
import LogoDark from "@/assets/LogoDark.tsx";

type Props = {
    darkMode: boolean;
    toggleDarkMode: () => void;
}


const NavBar = ({ darkMode, toggleDarkMode } : Props) => {
    const [showNavBar, setShowNavBar] = useState<boolean>(false)
    return (
        <>
            <nav className="padding-x py-6 flex justify-between items-center  gap-6 sticky top-0 z-10 bg-[#FFFFFF] border-b-[#3B3C4A] border-b dark:bg-[#141624]">
                <Link to={"/"}  className="text-[#141624] text-2xl dark:text-[#FFFFFF]">
                    {
                        darkMode ?
                            <LogoDark className="h-12 w-auto"/> :
                            <LogoLight className="h-12 w-auto" />
                    }

                </Link>
                <ul className="flex items-center  justify-end gap-9 text-[#3B3C4A] lg:flex-1 max-md:hidden dark:text-[#FFFFFF]">
                    <li>
                        <NavLink className={({ isActive })=> isActive ? "active" : ""} to={"/profile"}>
                            My Profile
                        </NavLink>
                    </li>


                    <li>Logout</li>
                    <li>Login</li>
                    <li>Register</li>
                    <li className="font-semibold">Create post</li>
                </ul>

                <ThemeSwitch checked={darkMode} onCheckedChange={toggleDarkMode} />
                <HiMenu className="text-2xl cursor-pointer hidden max-md:block dark:text-white" onClick={() => setShowNavBar(curr => !curr)} />
            </nav>

            {showNavBar && <ResponsiveNavBar />}
        </>
    );
};
export default NavBar;
