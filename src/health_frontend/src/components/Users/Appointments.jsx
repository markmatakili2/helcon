import icons from "../../../utils/icons";
import { Link } from "react-router-dom";

const UserAppointments = () => {
  return (
    <div className=" py-20 w-full flex md:flex-row flex-col pl-6 justify-around">
      <ul className="flex md:flex-col flex-row gap-y-6">
        <li className="px-6 py-6  bg-primary font-bold text-md rounded-md">
          <Link to="/new-appointment">
            {" "}
            <span className="pr-2">{icons.pen}</span> Book appointment
          </Link>
        </li>
        <li className="p-6 py-2">
          <Link to="">
            <span className="pr-2">{icons.calendar}</span> My appointments
          </Link>
        </li>
      </ul>

      <div className="flex-1 flex flex-col items-start  overflow-x-auto text-white">
        <h2 className="font-bold text-2xl px-4 pb-6">Manage Appointments</h2>
        <table className="table-auto min-w-full  border-separate border-spacing-x-2">
          <thead>
            <tr className="bg-[#2D2B7C]">
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider mx-2">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider mx-2">
                Doctor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider mx-2">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider mx-2">
                Status
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider mx-2">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#0F0F3E]">
            <tr className="">
              <td className="px-6 py-4 whitespace-nowrap border-b">
                03/11/2023
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b">
                john_alma
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b">Dentist</td>
              <td className="px-6 py-4 whitespace-nowrap border-b">Approved</td>
              <td className="py-4 whitespace-nowrap border-b  space-x-2 flex justify-center">
                <button className="rounded-lg px-2  bg-primary pr-2 mr-2">
                  Chat
                </button>
                <button className="rounded-lg bg-red px-2">Delete</button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b">
                03/11/2023
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b">
                john_alma
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b">Dentist</td>
              <td className="px-6 py-4 whitespace-nowrap border-b">Approved</td>

              <td className="py-4 whitespace-nowrap border-b  space-x-2 flex justify-center">
                <button className="rounded-lg px-2  bg-primary pr-2 mr-2">
                  Chat
                </button>
                <button className="rounded-lg bg-red px-2">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserAppointments;
