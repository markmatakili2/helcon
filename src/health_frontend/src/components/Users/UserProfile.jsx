import React from "react";

const  myProfile = () => {
  const user = {
    avatar: "../../images/maledoc.png",
    name: "John Doe",
    email: "john.doe@example.com",
    location: "New York, USA",
    bio: "Software developer with a passion for open-source projects and web development.",
    wallet: {
      balance: 1000.0,
      transactions: [
        { date: "2023-06-20", amount: 50.0, description: "Grocery shopping" },
        {
          date: "2023-06-18",
          amount: 150.0,
          description: "Electronics purchase",
        },
        { date: "2023-06-15", amount: 75.0, description: "Restaurant" },
      ],
    },
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-10">
      <img
        src={user.avatar}
        alt="User Avatar"
        className="w-24 h-24 rounded-full mx-auto mt-4"
      />
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">{user.name}</h2>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-600">{user.location}</p>
        <p className="text-gray-700 mt-2">{user.bio}</p>
      </div>
      <div className="px-4 py-2 mt-4 bg-gray-100">
        <h3 className="text-lg font-semibold">Wallet</h3>
        <p className="text-gray-800">Balance: $1000.00</p>
        <h4 className="text-md font-semibold mt-2">Recent Transactions</h4>
        <ul className="list-disc list-inside">
          <li className="text-gray-600">
            2023-06-20: $50.00 - Grocery shopping
          </li>
          <li className="text-gray-600">
            2023-06-18: $150.00 - Electronics purchase
          </li>
          <li className="text-gray-600">2023-06-15: $75.00 - Restaurant</li>
        </ul>
      </div>
    </div>
  );
};

export default myProfile;
