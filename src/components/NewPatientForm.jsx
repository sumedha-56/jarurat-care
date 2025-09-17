import React, { useState } from "react";

function NewPatientForm({ onAdd, onCancel }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return alert("Name required");
    const newPatient = {
      id: Date.now(),
      name: name.trim(),
      age: age ? Number(age) : null,
      phone: phone.trim(),
      email: email.trim(),
      address: "Not provided"
    };
    onAdd(newPatient);
    setName(""); setAge(""); setPhone(""); setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input required value={name} onChange={e=>setName(e.target.value)} placeholder="Full name" className="border p-2 rounded" />
        <input value={age} onChange={e=>setAge(e.target.value)} placeholder="Age" type="number" className="border p-2 rounded" />
        <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Phone" className="border p-2 rounded" />
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email" className="border p-2 rounded" />
      </div>

      <div className="flex gap-2 justify-end">
        <button type="button" onClick={onCancel} className="px-3 py-1 rounded border">Cancel</button>
        <button type="submit" className="px-3 py-1 rounded bg-green-600 text-white">Add Patient</button>
      </div>
    </form>
  );
}

export default NewPatientForm;
