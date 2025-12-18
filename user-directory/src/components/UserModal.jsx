import React from "react";

const UserModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">
          {user.name}
        </h2>

        <div className="space-y-3">
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Phone:</strong> {user.phone}
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a
              href={`http://${user.website}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              {user.website}
            </a>
          </p>

          <div className="bg-gray-50 p-3 rounded mt-4">
            <h3 className="font-semibold text-gray-700">Address</h3>
            <p>
              {user.address.street}, {user.address.suite}
            </p>
            <p>
              {user.address.city}, {user.address.zipcode}
            </p>
          </div>

          <div className="bg-gray-50 p-3 rounded">
            <h3 className="font-semibold text-gray-700">Company</h3>
            <p>{user.company.name}</p>
            <p className="italic text-sm text-gray-600">
              "{user.company.catchPhrase}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
