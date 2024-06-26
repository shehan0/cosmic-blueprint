"use client";
import React, { useState } from "react";

const AstrologyForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    dob: "", // Date of Birth
    timeOfBirth: "", // Time of Birth
    placeOfBirth: "", // Place of Birth
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert(
      "Thank you for booking your consultation. Astrologer Priyantha will be in touch soon!"
    );
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Book Your Live 30-Minute Consultation
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Experience a personalized astrology session with Astrologer
            Priyantha from Sri Lanka. Fill out the form below to schedule your
            consultation.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:w-2/3 w-full mx-auto px-8 items-end"
        >
          <div className="relative flex-grow w-full">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative flex-grow w-full">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative flex-grow w-full">
            <label htmlFor="dob" className="leading-7 text-sm text-gray-600">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <div className="relative flex-grow w-full">
            <label
              htmlFor="time-of-birth"
              className="leading-7 text-sm text-gray-600"
            >
              Time of Birth
            </label>
            <input
              type="time"
              id="time-of-birth"
              name="timeOfBirth"
              value={formData.timeOfBirth}
              onChange={handleChange}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>

          <div className="relative w-full mb-4">
            <label
              htmlFor="place-of-birth"
              className="leading-7 text-sm text-gray-600"
            >
              Place of Birth
            </label>
            <input
              type="text"
              id="place-of-birth"
              name="placeOfBirth"
              value={formData.placeOfBirth}
              onChange={handleChange}
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Schedule Consultation
          </button>
        </form>
      </div>
    </section>
  );
};

export default AstrologyForm;
