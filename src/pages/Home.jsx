import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-2">Welcome to Jarurat Care</h1>
      <p className="text-gray-600 mb-6">
        Build, view and manage patient records.
      </p>

      <div className="space-x-3">
        <Link to="/patients" className="inline-block bg-blue-600 text-white px-4 py-2 rounded shadow">
          Open Patients
        </Link>
      </div>

      <section className="mt-8 bg-white p-4 rounded shadow">
        <h2 className="font-semibold">What to check</h2>
        <ul className="list-disc ml-5 mt-2 text-gray-700">
          <li>Search patients by name</li>
          <li>View patient details </li>
          <li>Add new patient</li>
          <li>Loading and error states handled</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
