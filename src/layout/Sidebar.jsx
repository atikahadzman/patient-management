import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// icons
import { HiHome, HiBookOpen, HiBookmark, HiCog, HiLogout, HiMenu, HiUser, HiUserAdd, HiUsers } from "react-icons/hi";   

const navItems = [
    { 
        id: "dashboard",
        to: "#", 
        label: "Dashboard", 
    },
    { 
        id: "patient",
        to: "/patient", 
        label: "Patient", 
    },
    { 
        id: "queue",
        to: "#", 
        label: "Queue",
    },
    { 
        id: "consultation",
        to: "#", 
        label: "Consultation",  
    },
    { 
        id: "warehouse",
        to: "#", 
        label: "Warehouse", 
    },
    {
        id: "report",
        to: "#",
        label: "Reports"
    },
    {
        id: "appointment",
        to: "#",
        label: "Appointment"
    },
    {
        id: "settings",
        to: "#",
        label: "Settings"
    },
];

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    return (
        <aside
            className={`
                w-240px
                h-full
                flex 
                flex-col
                border-r
                border-gray-200
                bg-[#0052CC]
                transition-all
                duration-200
                ${collapsed ? "w-14" : "w-56"}
            `}
        >

            {/* header */}
            <div className="flex items-center gap-2 px-3 py-4 border-b border-gray-100">
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="p-1.5 rounded-lg hover:bg-black-100 text-white-500 shrink-0"
                    aria-label="Toggle sidebar"
                >
                    <HiMenu size={20} className="text-white"/>
                </button>

                {!collapsed && (
                    <span className="font-semibold text-white text-sm truncate">
                        {/* <HiMenu size={20} /> */}
                    </span>
                )}
            </div>

            {/* navigation sidebar */}
            <nav className="flex flex-col flex-1 p-2 space-y-1">
                {navItems.map(({ id, to, label }) => (
                    <NavLink
                        key={id}
                        to={to}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2 rounded-lg text-md transition
                            ${
                                id === 'patient'
                                ? "bg-gray-100 text-gray-500 font-medium"
                                : "text-white hover:bg-gray-50 hover:text-black"
                            }`
                        }
                    >
                        <span>{label}</span>
                    </NavLink>
                ))}
            </nav>

            {/* bottom card */}
            <div className="border-t border-gray-200 p-3">
                <div className="bg-white rounded-lg p-3 flex flex-col gap-2">
                    {!collapsed && (
                        <span className="text-sm text-gray-700 font-medium">
                            Upgrade to Pro
                        </span>
                    )}

                    <button
                        className="w-full 
                        flex 
                        items-center 
                        justify-center 
                        gap-2 
                        px-3 
                        py-2 
                        rounded-lg
                        bg-[#0052CC] 
                        text-white 
                        text-sm 
                        font-medium 
                        hover:bg-blue-700 
                        transition"
                    >
                        {collapsed ? <HiUser size={18} /> : "Upgrade"}
                    </button>
                </div>
            </div>
        </aside>
    );
}