import { HiDotsHorizontal, HiDotsVertical, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useState } from "react";
import ReactWorldFlags from 'react-world-flags';

const Flag = ReactWorldFlags.default || ReactWorldFlags;

const Table = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const countryCodes = {
        "MY": "+60",
        "US": "+1",
        "GB": "+44",
        "CA": "+1",
        "SG": "+65",
        "AU": "+61",
        "JP": "+81",
        "CH": "+86",
        "ID": "+62",
        "PH": "+63",
    };

    // table header
    const tableHeader = [
        { 
            key: "patient", 
            label: "Patient Name" 
        },
        { 
            key: "contact", 
            label: "Contact" 
        },
        { 
            key: "nationality", 
            label: "Nationality" 
        },
        {
            key: "datetime", 
            label: "Datetime" 
        },
        { 
            key: "action", 
            label: <HiDotsHorizontal title="Action" size={20} />
        },
    ];

    // dummy data
    const patients = [
        {
            id: 1,
            name: "Tan Wei Ling",
            avatar: "/avatar-1.png",
            contact: "12-345 6789",
            nationality: "Malaysia",
            flag: "MY",
            datetime: "17 Jul 2026, 09:30",
            status: "1",
        },
        {
            id: 2,
            name: "Siti Aishah",
            avatar: "/avatar-2.png",
            contact: "19-876 5432",
            nationality: "Malaysia",
            flag: "MY",
            datetime: "17 Jul 2026, 10:15",
            status: "1",
        },
        {
            id: 3,
            name: "Rajesh Kumar",
            avatar: "/avatar-6.png",
            contact: "8123 4567",
            nationality: "Singapore",
            flag: "SG",
            datetime: "17 Jul 2026, 11:00",
            status: "2",
        },
        {
            id: 4,
            name: "Yuki Tanaka",
            avatar: "/avatar-5.png",
            contact: "90-1234 5678",
            nationality: "Japan",
            flag: "JP",
            datetime: "17 Jul 2026, 13:45",
            status: "2",
        },
        {
            id: 5,
            name: "Michael Chen",
            avatar: "/avatar-4.png",
            contact: "16-222 3344",
            nationality: "China",
            flag: "CH",
            datetime: "17 Jul 2026, 14:20",
            status: "1",
        },
        {
            id: 6,
            name: "Aditya Pratama",
            avatar: "/avatar-3.png",
            contact: "16-222 5555",
            nationality: "Indonesia",
            flag: "ID",
            datetime: "17 Jul 2026, 14:20",
            status: "2",
        },
        {
            id: 7,
            name: "Kathryn Bernado",
            contact: "7754545151",
            nationality: " Philippines",
            flag: "PH",
            datetime: "20 Jul 2026, 14:20",
            status: "1",
        },
    ];

    // pagination
    const PAGE_SIZE = 5;
    const totalPages = Math.ceil(patients.length / PAGE_SIZE);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const paginatedPatients = patients.slice(startIndex, startIndex + PAGE_SIZE);

    const goToPage = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    return (
        <div className="overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base">
            {/* patient table */}
            <table className="w-full text-sm text-left rtl:text-right text-body">
                <thead className="text-sm text-body bg-neutral-secondary-medium border border-0.5">
                    <tr>
                        {tableHeader.map((col) => (
                            <th
                                key={col.key}
                                scope="col"
                                className="px-6 py-3 font-medium"
                            >
                                {col.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {paginatedPatients.map((patient) => (
                        <tr
                            key={patient.id}
                            className="odd:bg-white even:bg-gray-50 border-b border-gray-100 last:border-0 hover:bg-gray-100 transition"
                        >
                            <th scope="row" className="px-2 py-2 font-medium text-heading whitespace-nowrap">
                                {/* mobile */}
                                <div className="flex md:hidden flex-col items-center gap-1 text-sm text-gray-600">
                                    <img
                                        src={patient.avatar || "/default-avatar.jpg"}
                                        className="w-30 h-30 object-cover rounded-2xl p-2 hover:translate-x-1 transition-transform"
                                        alt={patient.name}
                                        loading="lazy"
                                        />
                                    <span>{patient.name}</span>
                                </div>

                                {/* desktop */}
                                <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
                                    <img
                                        src={patient.avatar || "/default-avatar.jpg"}
                                        className="w-30 h-30 object-cover rounded-2xl p-2 hover:translate-x-1 transition-transform"
                                        alt={patient.name}
                                        loading="lazy"
                                        />
                                    <span>{patient.name}</span>
                                </div>
                            </th>
                            <td className="px-2 py-2">
                                <span>{countryCodes[patient.flag]}</span> {patient.contact}
                            </td>
                            <td className="px-2 py-2">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    {patient.nationality}
                                    <Flag
                                        code={patient.flag}
                                        style={{ width: 30, height: 30 }}
                                    />
                                </div>
                            </td>
                            <td className="px-2 py-2">
                                {patient.datetime}
                            </td>
                            <td className="px-2 py-2">
                                <div className={`w-fit rounded-md px-2 py-1 text-xs font-semibold whitespace-nowrap ${
                                    patient.status === "1"
                                        ? "bg-rose-400 text-rose-900"
                                        : "bg-sky-400 text-sky-900"
                                    }`}>
                                    {patient.status === "1" ? "VIP" : "Non-VIP"}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* pagination footer */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
                <span className="text-sm text-gray-600">
                    Showing {startIndex + 1}–{Math.min(startIndex + PAGE_SIZE, patients.length)} of {patients.length}
                </span>

                <div className="flex items-center gap-1">
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-transparent transition"
                        aria-label="Previous page"
                    >
                        <HiChevronLeft size={18} />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => goToPage(page)}
                            className={`w-8 h-8 rounded-lg text-sm transition ${
                                page === currentPage
                                    ? "bg-[#0052CC] text-white font-medium"
                                    : "text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-transparent transition"
                        aria-label="Next page"
                    >
                        <HiChevronRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Table;