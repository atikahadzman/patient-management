import { HiDotsHorizontal } from "react-icons/hi";
import ReactWorldFlags from 'react-world-flags';

const Flag = ReactWorldFlags.default || ReactWorldFlags;

const Table = () => {
    const countryCodes = {
        "MY": "+60",
        "US": "+1",
        "GB": "+44",
        "CA": "+1",
        "SG": "+65",
        "AU": "+61",
        "JP": "+81",
        "CH": "+86",
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
    ];

    return (
        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
            <table className="w-full text-sm text-left rtl:text-right text-body">
                <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
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
                    {patients.map((patient) => (
                        <tr key={patient.id} className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                            <th scope="row" className="px-2 py-2 font-medium text-heading whitespace-nowrap">
                                <img
                                    src={patient.avatar || "/default-avatar.jpg"}
                                    className="w-30 h-30 object-cover rounded-2xl p-2 hover:translate-x-1 transition-transform"
                                    alt={patient.name}
                                    loading="lazy"
                                />
                                <span>{patient.name}</span>
                            </th>
                            <td className="px-2 py-2">
                                <span>{countryCodes[patient.flag]}</span> {patient.contact}
                            </td>
                            <td className="px-2 py-2">
                                {patient.nationality}
                                <Flag
                                    code={patient.flag}
                                    style={{ width: 30, height: 30 }}
                                />
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
        </div>
    );
}

export default Table;