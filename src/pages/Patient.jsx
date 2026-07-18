import Table from '../component/Table';
import Appointment from '../component/Appointment';

const Patient = () => {
    return (
        <div className="w-full bg-gray-50">
            <h3 className="text-24px font-bold">
                List of Patient
            </h3>
            
            <Appointment />
            <Table />
        </div>
    );
}

export default Patient;