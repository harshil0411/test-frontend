import React from "react";

export const Input = ({ label, type = "text", name, placeholder, onChange }) => {
  return (
    <div className="mb-4">
      {label && <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};