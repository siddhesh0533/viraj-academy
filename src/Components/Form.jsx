import React from "react";

export default function Form() {
  return (
    <section className="w-full bg-white rounded-3xl p-10 md:p-5 lg:p-10 shadow-sm mt-8">
      <h2 className="text-4xl md:text-6xl lg:8xl font-semibold text-[#240046] mb-10 text-center">
        Join the Excellence!
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* First Name */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-[#240046] mb-1">
            First Name *
          </label>
          <input
            type="text"
            className="bg-[#e9e7ef] rounded-xl h-12 px-4 outline-none"
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-[#240046] mb-1">
            Last Name *
          </label>
          <input
            type="text"
            className="bg-[#e9e7ef] rounded-xl h-12 px-4 outline-none"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-[#240046] mb-1">Email</label>
          <input
            type="email"
            className="bg-[#e9e7ef] rounded-xl h-12 px-4 outline-none"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-[#240046] mb-1">Phone</label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-[#240046]">🌐</span>
            <input
              type="text"
              className="bg-[#e9e7ef] rounded-xl h-12 pl-10 pr-6 w-full outline-none"
            />
            <span className="absolute right-3 top-3 text-[#240046]">⌄</span>
          </div>
        </div>
      </form>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-[#240046] mb-1">
            Requested Course
          </label>
          <input
            type="text"
            className="bg-[#e9e7ef] rounded-xl h-12 px-4 outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-[#240046] mb-1">Message</label>
          <input
            type="text"
            className="bg-[#e9e7ef] rounded-xl h-12 px-4 outline-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end mt-6">
        <button className="bg-[#240046] text-white px-10 py-3 rounded-full text-lg shadow-md hover:opacity-90 transition">
          Submit
        </button>
        </div>
    </section>
)}