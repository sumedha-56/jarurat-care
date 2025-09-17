import React from "react";

function PatientModal({ patient, onClose }) {
  if (!patient) return null;
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-2">{patient.name}</h2>

        <div className="text-sm text-gray-700 space-y-1">
          <p><strong>Age:</strong> {patient.age}</p>
          <p><strong>Phone:</strong> {patient.phone}</p>
          <p><strong>Email:</strong> {patient.email}</p>
          <p><strong>Address:</strong> {patient.address}</p>
        </div>

        <div className="mt-4 text-right">
          <button onClick={onClose} className="bg-blue-600 text-white px-4 py-2 rounded">Close</button>
        </div>
      </div>
    </div>
  );
}

export default PatientModal;
