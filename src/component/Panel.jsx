import { HiX } from "react-icons/hi";
import ReactWorldFlags from 'react-world-flags';

const Flag = ReactWorldFlags.default || ReactWorldFlags;

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

const Panel = ({ patient, isOpen, onClose }) => {
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className={`fixed top-0 right-0 h-full w-full sm:max-w-sm bg-gray-50
            border border-0.5 shadow-xs z-40 p-6 overflow-y-auto
            transform transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-gray-100 text-gray-500"
                aria-label="Close panel"
            >
                <HiX size={20} />
            </button>

            {!patient ? (
                <div className="text-center py-24 font-semibold text-gray-700">
                    Ops, it's empty here
                </div>
            ) : (
                <>
                    {/* avatar */}
                    <img
                        src={patient.avatar || "/default-avatar.jpg"}
                        className="w-20 h-20 object-cover rounded-2xl mt-6"
                        alt={patient.name}
                        loading="lazy"
                    />

                    {/* name, badge */}
                    <div className="mt-6 mb-2">
                        <div className="flex items-center gap-2">
                            <h5 className="text-2xl font-semibold tracking-tight text-heading">
                                {patient.name}
                            </h5>
                            <div
                                className={`w-fit rounded-md px-2 py-1 text-sm font-semibold whitespace-nowrap ${
                                    patient.status === "1"
                                        ? "bg-[#FFD700] text-yellow-900"
                                        : "bg-sky-400 text-sky-900"
                                }`}
                            >
                                {patient.status === "1" ? "VIP" : "Non-VIP"}
                            </div>
                        </div>
                    </div>

                    {/* nationality and flag */}
                    <div className="flex items-center gap-2 text-sm text-gray-700 mt-4">
                        {patient.nationality}
                        <Flag code={patient.flag} style={{ width: 24, height: 18 }} />
                    </div>

                    {/* contact */}
                    <div className="flex items-center gap-2 text-sm text-gray-700 mt-2">
                        <span>{countryCodes[patient.flag]}</span> {patient.contact}
                    </div>

                    {/* datetime */}
                    <div className="flex items-center gap-2 text-sm text-gray-700 mt-2">
                        <span>{patient.datetime}</span>
                    </div>
                </>
            )}
        </div>
    );
};

export default Panel;