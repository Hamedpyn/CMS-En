import { MdLanguage } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import logo from "/public/logo12.png"

export default function Header() {
    return (
        <div
            className=
            "fixed right-0 left-0 select-none p-4 container mx-auto max-w-[1400px] flex items-center justify-between z-50"
        >
            <div>
                <h2 className="text-3xl font-bold">HAMEDPYN</h2>
            </div>
            <div className="flex items-center gap-x-3">
                <div className="relative cursor-pointer">
                    <FaRegBell className="text-[30px]" />

                    <div className="text-center w-5 text-white text-[12px] absolute top-[-5px] right-0 bg-[red] rounded-full">2</div>
                </div>

                <div className="cursor-pointer relative">
                    <MdLanguage className="text-[30px]" />
                    <div className="text-center w-5 text-white text-[12px] absolute top-[-5px] right-0 bg-[red] rounded-full z-50">2</div>
                </div>

                <div className="cursor-pointer">
                    <IoSettingsOutline className="text-[30px]" />
                </div>

                <img src={logo} className="w-[80px] cursor-pointer" alt="userLogo" />
            </div>
        </div>
    )
}
