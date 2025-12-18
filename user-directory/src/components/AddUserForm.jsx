import React, { useState } from "react";

const AddUserForm = ({ onAddUser }) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.phone) tempErrors.phone = "Phone is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newUser = {
        ...formData,
        id: Date.now(),
        address: { street: "N/A", suite: "", city: "Local", zipcode: "" },
        company: { name: "N/A", catchPhrase: "" },
        website: "example.com",
      };
      onAddUser(newUser);
      setFormData({ name: "", email: "", phone: "" });
      setErrors({});
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200"
    >
      <h2 className="text-xl font-bold mb-4">Add New User</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          {/* Added name="name" and id="name" */}
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            autoComplete="name"
            className={`w-full p-2 border rounded ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          {/* Added name="email" and id="email" */}
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            autoComplete="email"
            className={`w-full p-2 border rounded ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          {/* Added name="phone" and id="phone" */}
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Phone"
            autoComplete="tel"
            className={`w-full p-2 border rounded ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors w-full md:w-auto"
      >
        Add User
      </button>
    </form>
  );
};

export default AddUserForm;
