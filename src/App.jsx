import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import About from "./pages/About";

function App() {
  return (
    <div className="min-h-screen bg-gray-45">
      <Header />
      <main className="max-w-5xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
