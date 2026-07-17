import Table from '../component/Table';

const Patient = () => {
    return (
        <div className="w-full bg-gray-50">
            <h3 className="text-2xl font-bold">
                List of Patient
            </h3>
            
            <Table />
        </div>
    );
}

export default Patient;