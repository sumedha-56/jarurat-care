import React from "react";

function PatientCard({ patient, onView }) {
  return (
    <div className="bg-white rounded shadow-sm p-4 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold">{patient.name}</h3>
        <p className="text-sm text-gray-600">Age: {patient.age}</p>
        <p className="text-sm text-gray-600">Contact: {patient.phone}</p>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => onView(patient)}
          className="ml-auto bg-blue-600 text-white px-3 py-1 rounded"
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default PatientCard;
