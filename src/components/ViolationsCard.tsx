// import { useNavigate } from "react-router-dom";
import { Violation } from "../types/violator";

// interface ViolationsProps {
//   OR_number: number;
//   apprehender_name: string;
//   apprehender_type: string;
//   paid: boolean;
//   violation_date: string;
//   id: string;
//   violation_place: string;
//   violator_type: string;
// }

const ViolationsCard = ({
  OR_number,
  apprehender_name,
  apprehender_type,
  paid,
  violation_date,
  // id,
  violation_place,
  violator_type,
}: Partial<Violation>) => { // no need to create a new type for the props just import it in types since we already have it in types that's just similar to this.

  // const navigate = useNavigate();

  return (
    <div
      className="flex justify-between self-center items-center bg-gray-200 p-3 rounded-lg shadow-md cursor-pointer mb-2 m-4 w-full"
      // onClick={() => navigate(`/detail/${id}`)} // no need to navigate
    >
      <div className="flex-1 pr-5 text-left">
        <span className="text-bs font-normal">{violation_date}</span>
      </div>
      <div className="flex-1 text-center">
        <span className="text-bs font-normal">{violation_place}</span>
      </div>
      <div className="flex-1 text-center ">
        <span className="text-bs font-normal">{violator_type}</span>
      </div>
      <div className="flex-1 text-center ">
        <span className="text-bs font-normal">{apprehender_name}</span>
      </div>
      <div className="flex-1 text-center ">
        <span className="text-bs font-normal">{apprehender_type}</span>
      </div>
      <div className="flex-1 text-center ">
        <span className="text-bs font-normal">{OR_number}</span>
      </div>
      <div className="flex-1 text-center ">
        <span className="text-bs font-normal">{paid ? "Paid" : "Unpaid"}</span>
      </div>
    </div>
  );
};

export default ViolationsCard;
