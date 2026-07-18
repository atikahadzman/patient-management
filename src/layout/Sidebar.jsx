import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// icons
import { HiOutlineHome, HiOutlineUser, HiOutlineViewList, HiOutlineDocumentReport, HiMenu, HiUser } from "react-icons/hi";   
import { PiWarehouseThin, PiHandshakeThin } from "react-icons/pi"; 
import { HiCalendarDays } from "react-icons/hi2";
import { CiSettings } from "react-icons/ci";

const navItems = [
    { 
        id: "dashboard",
        to: "#", 
        label: "Dashboard",
        icon: <HiOutlineHome size={20} />
    },
    { 
        id: "patient",
        to: "/patient", 
        label: "Patient", 
        icon: <HiOutlineUser size={20} />
    },
    { 
        id: "queue",
        to: "#", 
        label: "Queue",
        badge: 2,
        icon: <HiOutlineViewList size={20} />
    },
    { 
        id: "consultation",
        to: "#", 
        label: "Consultation", 
        icon: <PiHandshakeThin size={20} /> 
    },
    { 
        id: "warehouse",
        to: "#", 
        label: "Warehouse", 
        icon: <PiWarehouseThin size={20} />
    },
    {
        id: "report",
        to: "#",
        label: "Reports",
        icon: <HiOutlineDocumentReport size={20} />
    },
    {
        id: "appointment",
        to: "#",
        label: "Appointment",
        badge: 5,
        icon: <HiCalendarDays size={20} />
    },
    {
        id: "settings",
        to: "#",
        label: "Settings",
        icon: <CiSettings size={20} />
    },
];

export default function Sidebar({ collapsed }) {
    return (
        <aside
            className={`
                h-full 
                flex 
                flex-col 
                border
                border-[#E5E5E5]
                bg-[#0052CC]
                transition-all 
                duration-200 
                overflow-hidden
                ${collapsed ? "w-0 md:w-12" : "w-56"}
            `}
        >

            {/* navigation sidebar */}
            <nav className="flex flex-col flex-1 p-2 space-y-1">
                {navItems.map(({ id, to, label, icon, badge }) => (
                    <NavLink
                        key={id}
                        to={to}
                        className={({ isActive }) =>
                            `flex items-center justify-start md:justify-between gap-3 px-2 py-2 rounded-lg text-md transition
                            ${
                                id === 'patient'
                                ? "bg-gray-100 text-gray-500 font-medium"
                                : "text-white hover:bg-gray-50 hover:text-black"
                            }`
                        }
                    >
                        <span className="flex justify-start items-center gap-3">
                            <span className="shrink-0">{icon}</span>
                            <span className="px-2">{label}</span>
                        </span>

                        {badge != null && (
                            <span className="hidden md:flex min-w-[20px] h-5 px-1.5 items-center justify-center rounded-full bg-red-500 text-white text-sm font-semibold">
                                {badge}
                            </span>
                        )}
                    </NavLink>
                ))}
            </nav>

            {/* bottom card */}
            {!collapsed && (
                <div className="hidden md:block border border-[#E5E5E5] p-3">
                    <div className="bg-white rounded-lg p-3 flex flex-col items-center md:items-stretch gap-2">
                        <span className="text-sm text-gray-700 font-medium">
                            Upgrade to Pro
                        </span>

                        <button
                            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#0052CC] text-white text-sm font-medium hover:bg-blue-700 transition"
                        >
                            <HiUser size={18} className="md:hidden" />
                            <span className="hidden md:inline">Upgrade</span>
                        </button>
                    </div>
                </div>
            )}
        </aside>
    );
}