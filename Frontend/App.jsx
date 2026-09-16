import { useEffect, useState } from "react";

function App() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/doctors")
      .then(res => res.json())
      .then(data => setDoctors(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-600">
        MeduraX
      </h1>

      <p className="mt-2 text-gray-600">
        Doctor Appointment Booking
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {doctors.map(doctor => (
          <div className="bg-white p-5 rounded-xl shadow" key={doctor._id}>
            <h2 className="text-xl font-bold">{doctor.name}</h2>
            <p>{doctor.specialization}</p>

            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
