import { HiPlus, HiOutlineSearch, HiSearch } from "react-icons/hi";  

export default function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-200 text-black flex items-center justify-between h-16 md:h-20">
            <div className="flex justify-start items-center">
                <span className="text-xl">
                    患者管理
                </span>
                <p className="text-sm">
                    Patient Management
                </p>
            </div>
            <div className="relative flex items-center">
                <HiOutlineSearch className="absolute left-3 text-gray-400 pointer-events-none" size={22} />
                <input 
                    type="text" 
                    placeholder="Search ..." 
                    className="w-100px pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-800"
                />
            </div>
            <button className="flex justify-end items-center rounded-lg hover:border-red-200 hover:text-red-500">
                <HiPlus size={22} />
                Add new patient
            </button>
        </nav>
    );
}