import React, { useState } from "react";

const ContactUs = () => {
  // form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    // reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-900 p-6 sm:p-10 rounded-2xl shadow-2xl">

        {/* Left Side Info */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Contact Us
          </h2>

          <p className="text-gray-400 mb-6">
            Have questions or need help? Fill out the form and we’ll get back to you as soon as possible.
          </p>

          <div className="space-y-3 text-gray-300 text-sm sm:text-base">
            <p>📍 Address: Dhaka, Bangladesh</p>
            <p>📧 Email: support@example.com</p>
            <p>📞 Phone: +880 1234-567890</p>
          </div>
        </div>

        {/* Right Side Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <label className="text-sm text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full mt-1 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full mt-1 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-sm text-gray-300">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full mt-1 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-white"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-300 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default ContactUs;