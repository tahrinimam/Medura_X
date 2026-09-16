import { useEffect, useState } from "react";

function Doctors() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/doctors")
      .then(res => res.json())
      .then(data => setDoctors(data));
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">
        Available Doctors
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {doctors.map(doctor => (
          <div
            key={doctor._id}
            className="bg-white p-6 rounded-xl shadow"
          >
            <h2 className="text-xl font-bold">
              Dr. {doctor.name}
            </h2>

            <p className="text-blue-600">
              {doctor.specialization}
            </p>

            <p className="text-gray-500 mt-2">
              Daily Limit: {doctor.dailyLimit}
            </p>

            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctors;
