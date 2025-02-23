import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    console.log("Form submitted: ", formData);
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden bg-gray-100' id='Contact'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-6 text-center'>Contact<span className='underline underline-offset-4 decoration-1 font-light'> With Us</span></h1>
      <p className='text-center text-gray-500 mb-12 max-w-xl mx-auto'>Ready to Make a Move? Let’s Build Your Future Together</p>
      
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-8 text-center text-gray-700">
          Get in Touch
        </h2>
        
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-600">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none h-32"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
