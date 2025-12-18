import React from "react";

const UserCard = ({ user, onClick }) => {
  return (
    <div
      onClick={() => onClick(user)}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer border border-gray-200"
    >
      <h3 className="text-xl font-bold text-gray-800 mb-2">{user.name}</h3>
      <p className="text-gray-600 text-sm">
        <span className="font-semibold">Email:</span> {user.email}
      </p>
      <p className="text-gray-600 text-sm">
        <span className="font-semibold">Phone:</span> {user.phone}
      </p>
    </div>
  );
};

export default UserCard;
