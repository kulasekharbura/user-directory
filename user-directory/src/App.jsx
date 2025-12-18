import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import UserModal from "./components/UserModal";
import AddUserForm from "./components/AddUserForm";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [sortAsc, setSortAsc] = useState(true);

  // Fetch Users
  useEffect(() => {
    const fetchUsers = async () => {
      // Check LocalStorage
      const storedUsers = localStorage.getItem("directoryUsers");
      if (storedUsers) {
        setUsers(JSON.parse(storedUsers));
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setUsers(data);
        localStorage.setItem("directoryUsers", JSON.stringify(data));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Handle Adding User
  const handleAddUser = (newUser) => {
    const updatedUsers = [newUser, ...users];
    setUsers(updatedUsers);
    localStorage.setItem("directoryUsers", JSON.stringify(updatedUsers));
  };

  // Filter Users
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort Users
  const sortedUsers = [...filteredUsers].sort((a, b) => {
    return sortAsc
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  return (
    <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
        User Directory
      </h1>

      {/* Add User Section */}
      <AddUserForm onAddUser={handleAddUser} />

      {/* Search & Sort Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="w-full md:w-1/2 p-3 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button
          onClick={() => setSortAsc(!sortAsc)}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
        >
          Sort: {sortAsc ? "A-Z" : "Z-A"}
        </button>
      </div>

      {/* State Handling: Loading & Error */}
      {loading && (
        <div className="text-center text-xl text-blue-600 animate-pulse">
          Loading users...
        </div>
      )}
      {error && (
        <div className="text-center text-xl text-red-600">Error: {error}</div>
      )}

      {/* User Grid */}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedUsers.length > 0 ? (
            sortedUsers.map((user) => (
              <UserCard key={user.id} user={user} onClick={setSelectedUser} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No users found.
            </p>
          )}
        </div>
      )}

      {/* Detail Modal */}
      {selectedUser && (
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </div>
  );
}

export default App;
