import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="h-screen flex flex-col">
            <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />

            <div className="flex flex-1 overflow-hidden">
                <Sidebar collapsed={collapsed}/>
                <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}