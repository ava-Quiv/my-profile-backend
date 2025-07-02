import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function BookingForm() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const service = queryParams.get('service') || '';

  const [form, setForm] = useState({
    email: '',
    contactNumber: '',
    expectedDeliveryTime: '',
    service,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/contact/customer/book', form);
      alert('You have successfully made a booking and we will be in touch very soon.Thank you for choosing Avatrom tech solutions');
    } catch (err) {
      alert('Booking failed!');
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl space-y-4"
      >
        <h2 className="text-2xl font-bold text-blue-700 text-center">Book a Service</h2>

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contactNumber"
          placeholder="Contact Number"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
          value={form.contactNumber}
          onChange={handleChange}
          required
        />
        <input
          type="datetime-local"
          name="expectedDeliveryTime"
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
          value={form.expectedDeliveryTime}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="service"
          className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-100"
          value={form.service}
          readOnly
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}
