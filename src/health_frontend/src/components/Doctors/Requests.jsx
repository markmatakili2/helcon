const Requests = () => {
  const requests = [
    {
      username: "@solp",
      details:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis quia soluta rerum.",
    },
    {
      username: "@ken_yeah",
      details: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      username: "@grace",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quae quasi tempora!",
    },
  ];

  return (
    <div className="p-4 w-full overflow-x-auto">
      <div className="text-2xl font-bold  py-4 text-white">Patient Requests</div>
      <div className="w-full ">
        <table>
          <thead>
            <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Username</th>
              <th className="py-3 px-6 text-left">Details</th>
              <th className="py-3 px-6 text-left">Accepts</th>
              <th className="py-3 px-6 text-left">cancel</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {requests.map((lesson, index) => (
              <tr
                key={index}
                className="border-b border-gray-300 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">{lesson.username}</td>
                <td className="py-3 px-6 text-left">{lesson.details}</td>
                <td className="py-3 px-6 text-left">
                  <button className="bg-[blue] text-white px-3 py-1 rounded hover:bg-blue-700">
                    Accept
                  </button>
                </td>

                <td className="py-3 px-6 text-left">
                  <button className="bg-[red] text-white px-3 py-1 rounded hover:bg-blue-700">
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Requests;
