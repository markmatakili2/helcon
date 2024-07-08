import { Link } from "react-router-dom";
import icons from "../../../utils/icons";

const UserReminders = () => {
  return (
    <div className=" py-20 w-full flex md:flex-row flex-col pl-6 justify-around">
      <ul className="flex md:flex-col flex-row gap-y-6">
        <li className="p-6 py-2 text-md">
          <button>
            <span className="pr-2">{icons.pen}</span> My reminders
          </button>
        </li>
        <li className="px-6 py-6  bg-primary font-bold text-md rounded-md">
          <Link to="">
            <span className="pr-2">{icons.pen}</span> Set reminder
          </Link>
        </li>
      </ul>

      <div className="flex-1 flex flex-col items-start  overflow-x-auto text-white ">
        <h2 className="font-bold text-2xl px-4 pb-6">Reminders</h2>
        <table className="table-auto min-w-full  border-separate ">
          <thead>
            <tr className="bg-[#2D2B7C]">
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider mx-2">
                Title
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider mx-2">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider mx-2">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider mx-2">
                Time
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#0F0F3E]">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b">
                Malaria dose
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b">
                2 times a day
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b">
                03/11/2023
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b">07:00 am</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap border-b">
                Malaria dose
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b">
                2 times a day
              </td>
              <td className="px-6 py-4 whitespace-nowrap border-b">
                03/11/2023
              </td>
              <td className=" px-6 whitespace-nowrap border-b">07:00 am</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default UserReminders;
