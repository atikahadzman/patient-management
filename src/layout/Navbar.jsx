import { useState, useRef, useEffect } from "react";
import { HiPlus, HiOutlineSearch, HiSearch, HiMenu, HiX, HiOutlineChevronDown } from "react-icons/hi";  

export default function Navbar({ collapsed, setCollapsed }) {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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
                <span className="hidden md:block px-2 py-2 text-sm">患者管理</span>
                <p className="text-sm color-[#666666]">Patient Management</p>
            </div>

            <div className="hidden md:block relative">
                <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                <input
                    type="text"
                    placeholder="Search"
                    className="w-[240px] md:w-64 rounded-lg border border-[#E5E5E5] py-2 pl-10 pr-3 text-sm text-gray-800"
                />
            </div>

            <div className="hidden md:flex items-center gap-0">
                <button className="flex items-center rounded-lg px-3 py-2 text-sm border border-[#0052CC] hover:border-[#0052CC] hover:text-[#0052CC] transition">
                    <HiPlus className="w-4 h-4" />
                    <span>New patient</span>
                </button>

                {/* profile section */}
                <div ref={menuRef} className="md:flex items-center text-sm px-3 py-2">
                    <div className="relative">
                        <button
                            onClick={() => setOpen((prev) => !prev)}
                            className="flex items-center gap-2 rounded-lg px-2 py-2 hover:bg-gray-100"
                        >
                            <img
                                src="/avatar-1.png"
                                alt="User"
                                className="w-8 h-8 rounded-full object-cover"
                            />
                            <span>Profile</span>
                            <HiOutlineChevronDown size={15}/>
                        </button>

                        {open && (
                            <div className="absolute right-0 mt-2 w-64 rounded-lg border border-[#E5E5E5] bg-white z-50">
                                <div className="border border-[#E5E5E5] px-4 py-3">
                                    <p className="font-semibold">Signed in as Admin</p>
                                    <p className="text-sm text-gray-500">
                                        admin@admin.com
                                    </p>
                                </div>

                                <ul className="p-2">
                                    <li>
                                        <a
                                            href="#"
                                            className="block rounded-md px-3 py-2 text-left hover:bg-gray-100"
                                        >
                                            Settings
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            className="block w-full rounded-md px-3 py-2 text-left hover:bg-gray-100"
                                        >
                                            Sign out
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}