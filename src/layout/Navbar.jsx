import { useState } from "react";
import { HiPlus, HiOutlineSearch, HiSearch, HiMenu, HiX } from "react-icons/hi";  

export default function Navbar({ collapsed, setCollapsed }) {
    return (
        <nav className="bg-white border-b border-[#E5E5E5] text-black flex items-center justify-between h-16 md:h-20 px-4 py-2">
            <div className="flex justify-start items-center gap-2">
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="flex items-center justify-center w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 lg:h-11 lg:w-11"
                    aria-label="Toggle sidebar"
                >
                    {collapsed ? (
                        <HiMenu size={20} className="text-gray-700" />
                    ) : (
                        <HiX size={20} className="text-gray-700" />
                    )}
                </button>
                <span className="px-2 py-2 text-sm">患者管理</span>
                <p className="text-sm color-[#666666]">Patient Management</p>
            </div>

            <div className="relative flex items-center">
                <HiOutlineSearch className="absolute left-3 text-gray-400 pointer-events-none" size={22} />
                <input
                    type="text"
                    placeholder="Search"
                    className="w-min-240px md:w-64 pl-10 pr-3 py-2 border border-[#E5E5E5] rounded-lg text-sm text-gray-800"
                />
            </div>

            <button className="flex items-center gap-0.5 rounded-lg px-2 py-2 text-sm border border-[#0052CC] hover:border-[#0052CC] hover:text-[#0052CC] transition">
                <HiPlus size={22} />
                Add new patient
            </button>
        </nav>
    );
}