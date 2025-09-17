import React, { useEffect, useState } from "react";
import axios from "axios";
import PatientCard from "../components/PatientCard";
import PatientModal from "../components/PatientModal";
import NewPatientForm from "../components/NewPatientForm";

function Patients() {
  const [patients, setPatients] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(null);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        // map API shape to our patient shape
        const data = res.data.map(u => ({
          id: u.id,
          name: u.name,
          age: 20 + (u.id % 40),
          phone: u.phone,
          email: u.email,
          address: `${u.address.suite}, ${u.address.street}, ${u.address.city}`
        }));
        setPatients(data);
        setFiltered(data);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to fetch patients. You can continue by adding new patients.");
      })
      .finally(()=>setLoading(false));
  }, []);

  useEffect(() => {
    if (!search.trim()) setFiltered(patients);
    else {
      setFiltered(patients.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      ));
    }
  }, [search, patients]);

  function handleView(patient) {
    setSelected(patient);
  }

  function handleCloseModal() {
    setSelected(null);
  }

  function handleAdd(newPatient) {
    setPatients(prev => [newPatient, ...prev]);
    setShowAdd(false);
  }

  return (
    <div className="py-6">
      <div className="flex items-center justify-between mb-4 gap-4">
        <h1 className="text-2xl font-semibold">Patients</h1>

        <div className="flex gap-2">
          <button onClick={() => setShowAdd(s => !s)} className="bg-green-600 text-white px-3 py-1 rounded">
            {showAdd ? "Hide Form" : "Add New Patient"}
          </button>
        </div>
      </div>

      {showAdd && (
        <div className="mb-4">
          <NewPatientForm onAdd={handleAdd} onCancel={() => setShowAdd(false)} />
        </div>
      )}

      <div className="mb-4">
        <input
          value={search}
          onChange={e=>setSearch(e.target.value)}
          placeholder="Search patient by name"
          className="w-full md:w-1/2 border p-2 rounded"
        />
      </div>

      {loading && <div className="text-gray-600">Loading patients...</div>}
      {error && <div className="text-red-600 mb-4">{error}</div>}

      {!loading && filtered.length === 0 && (
        <div className="text-gray-600">No patients found.</div>
      )}

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map(patient => (
          <PatientCard key={patient.id} patient={patient} onView={handleView} />
        ))}
      </div>

      <PatientModal patient={selected} onClose={handleCloseModal} />
    </div>
  );
}

export default Patients;
