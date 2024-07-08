import { Link } from "react-router-dom";
import icons from "../../../utils/icons";
import { useState } from "react";

const UserEvents = () => {
  const [isEvent, setEvent] = useState("available");

  const showEvents = (data) => {
    setEvent(data);
  };

  return (
    <div className="py-20 w-full flex md:flex-row flex-col pl-6 justify-around px-2">
      <ul className="flex md:flex-col  flex-row gap-y-6 md:-mt-10 md:-ml-4">
        <li className="px-6 py-6 bg-primary font-bold text-md rounded-md">
          <Link to="/create-event">
            {" "}
            <span className="pr-2">{icons.pen}</span> Create event
          </Link>
        </li>
        <li className="p-6 py-6 text-md bg-primary font-bold text-md rounded-md">
          <button onClick={() => showEvents("available")}>
            {" "}
            <span className="pr-2">{icons.calendar}</span> available events
          </button>
        </li>
        <li className="p-6 py-6 text-md">
          <button onClick={() => showEvents("responses")}>
            <span className="pr-2">{icons.calendar}</span> Event Responses
          </button>
        </li>
      </ul>

      <div className="flex-1 flex flex-col items-start overflow-x-auto text-white px-2 md:-mt-20">
        <h2 className="font-bold text-2xl px-4 pb-6">
          {isEvent === "available" ? "Manage Events" : "Event Responses"}
        </h2>

        <table className="table-auto min-w-full border-separate ">
          <thead>
            <tr className="bg-[#2D2B7C]">
              {isEvent === "available" ? (
                <>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider mx-2">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider mx-2">
                    Event name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider mx-2">
                    Organizer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider mx-2">
                    Closes
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider mx-2">
                    Read more
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider mx-4">
                    Ignore
                  </th>
                </>
              ) : (
                <>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider mx-2">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider mx-2">
                    User id
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider mx-2">
                    User name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider mx-2">
                    Data id
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider mx-2">
                    Query
                  </th>
                </>
              )}
            </tr>
          </thead>

          <tbody className="bg-[#0F0F3E]">
            {isEvent === "available" ? (
              <>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    04/11/2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    Organ transplant
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    Steve
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    20/12/2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    <button className="rounded-lg px-2 bg-primary p-1 px-2">
                      Read more
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    <button className="rounded-lg bg-red p-1 px-2">
                      ignore
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    04/11/2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    Organ transplant
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    Steve
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    20/12/2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    <button className="rounded-lg px-2 bg-primary p-1 px-2">
                      Read more
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    <button className="rounded-lg bg-red p-1 px-2">
                      ignore
                    </button>
                  </td>
                </tr>
              </>
            ) : (
              <>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    04/11/2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    978345
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    weks23
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    jibidsvg743i7849yjbkr
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    <button className="rounded-lg px-2 bg-primary p-1 px-2">
                      Read more
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    04/11/2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    978345
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    weks23
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    jibidsvg743i7849yjbkr
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border-b">
                    <button className="rounded-lg px-2 bg-primary p-1 px-2">
                      Read more
                    </button>
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserEvents;
