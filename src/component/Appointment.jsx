import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useRef } from "react";

const Appointment = () => {
       const appointments = [
        {
            id: 1,
            patient_name: "Li Tian Mei",
            datetime: "29 Jul 2026, 09:30",
            treatment_type: "X-Ray",
            assigned_doctor: "Dr. Raju",
            status: "1",
        },
        {
            id: 2,
            patient_name: "Siti Aishah",
            datetime: "29 Jul 2026, 14:30",
            treatment_type: "Doctor Consultation",
            assigned_doctor: "Dr. Aisy",
            status: "1",
        },
        { 
            id: 3, 
            datetime: "30 Jul 2026, 10:00", 
            treatment_type: "Blood Test", 
            assigned_doctor: "Dr. Lim", 
            patient_name: "Rajesh Kumar", 
            status: "2" 
        },
    ];

    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (!scrollRef.current) return;
        const cardWidth = scrollRef.current.firstChild?.offsetWidth || 300;
        scrollRef.current.scrollBy({
            left: direction === "next" ? cardWidth + 16 : -(cardWidth + 16),
            behavior: "smooth",
        });
    };

    return (
        <div className="relative">
            {appointments.length === 0 ? (
                <div className="text-center py-24 font-poppins font-semibold">
                    No upcoming appointment
                </div>
            ) : (
                <>
                    {/* previous/next buttons */}
                    <button
                        onClick={() => scroll("prev")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full hover:bg-gray-50"
                        aria-label="Previous appointment"
                    >
                        <HiChevronLeft size={20} />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-10 py-2 no-scrollbar"
                    >
                        {appointments.map((appointment) => (
                            <div
                                key={appointment.id}
                                className="snap-center shrink-0 w-72 bg-gray-50 p-6 border border-gray-200 rounded-base shadow-xs"
                            >
                                <div
                                    className={`w-fit rounded-md px-2 py-1 text-[12px] font-semibold whitespace-nowrap ${
                                        appointment.status === "1"
                                            ? "bg-rose-400 text-rose-900"
                                            : "bg-sky-400 text-sky-900"
                                    }`}
                                >
                                    {appointment.status === "1" ? "Upcoming appointment" : "Cancelled appointment"}
                                </div>

                                <h5 className="mt-2 mb-2 text-[24px] font-semibold tracking-tight text-heading">
                                    {appointment.assigned_doctor}
                                </h5>
                                <p className="mb-1 text-[14px]">{appointment.datetime}</p>
                                <p className="mb-1 text-[14px]">{appointment.patient_name}</p>
                                <p className="mb-3 text-[14px]">{appointment.treatment_type}</p>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => scroll("next")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full hover:bg-gray-50"
                        aria-label="Next appointment"
                    >
                        <HiChevronRight size={20} />
                    </button>
                </>
            )}
        </div>
    );
};

export default Appointment;