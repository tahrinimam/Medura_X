import { useEffect, useState } from "react";

function Admin() {
  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({
    name: "",
    specialization: "",
    email: "",
    dailyLimit: 20
  });

  const fetchDoctors = async () => {
    const res = await fetch("http://localhost:5000/api/doctors");
    const data = await res.json();
    setDoctors(data);
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const addDoctor = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/doctors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    setForm({
      name: "",
      specialization: "",
      email: "",
      dailyLimit: 20
    });

    fetchDoctors();
  };

  const deleteDoctor = async (id) => {
    await fetch(`http://localhost:5000/api/doctors/${id}`, {
      method: "DELETE"
    });

    fetchDoctors();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        MeduraX Admin Panel
      </h1>

      {/* Add Doctor */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <h2 className="text-xl font-bold mb-4">
          Add Doctor
        </h2>

        <form
          onSubmit={addDoctor}
          className="grid md:grid-cols-2 gap-4"
        >
          <input
            className="border p-3 rounded"
            placeholder="Doctor Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            required
          />

          <input
            className="border p-3 rounded"
            placeholder="Specialization"
            value={form.specialization}
            onChange={(e) =>
              setForm({
                ...form,
                specialization: e.target.value
              })
            }
            required
          />

          <input
            className="border p-3 rounded"
            placeholder="Doctor Email"
            type="email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            required
          />

          <input
            className="border p-3 rounded"
            type="number"
            placeholder="Daily Booking Limit"
            value={form.dailyLimit}
            onChange={(e) =>
              setForm({
                ...form,
                dailyLimit: Number(e.target.value)
              })
            }
          />

          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            + Add Doctor
          </button>
        </form>
      </div>

      {/* Doctors */}
      <div className="bg-white p-6 rounded-xl shadow">

        <h2 className="text-xl font-bold mb-4">
          Doctors
        </h2>

        <div className="grid md:grid-cols-3 gap-5">

          {doctors.map((doctor) => (
            <div
              key={doctor._id}
              className="border p-5 rounded-xl"
            >
              <h3 className="text-lg font-bold">
                {doctor.name}
              </h3>

              <p className="text-gray-600">
                {doctor.specialization}
              </p>

              <p className="text-sm mt-2">
                📧 {doctor.email}
              </p>

              <p className="text-sm">
                📅 Daily Limit: {doctor.dailyLimit}
              </p>

              <button
                onClick={() => deleteDoctor(doctor._id)}
                className="bg-red-500 text-white px-4 py-2 rounded mt-4"
              >
                Delete
              </button>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default Admin;
