import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { PaperIcon } from './Icons';
import AnimatedBox from './AnimatedBox';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    email: '',
    message: ''
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const router = useRouter();

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    const capitalizedValue = ['firstName', 'lastName', 'address', 'message'].includes(id)
      ? capitalizeFirstLetter(value)
      : value;

    setFormData((prevState) => ({
      ...prevState,
      [id]: capitalizedValue
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Form data sent successfully');
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
          router.reload();
        }, 2000);
      } else {
        console.error('Failed to send form data');
      }
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };

  return (
    <>
      <AnimatedBox>
        <div className="flex  justify-center items-center me-2 w-full lg:mt-3">
          <form className="w-full max-w-md bg-slate-200 shadow-lg rounded px-8 pb-5">
            <h1 className="font-bold text-xl text-center text-blue-800 mt-4 lg:mt-2">Keep In Touch</h1>
            <div className="flex gap-2 mt-2">
              <div className="">
                <label className="block text-gray-700 text-sm font-bold" htmlFor="firstName">
                  First Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold" htmlFor="phoneNumber">
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phoneNumber"
                type="tel"
                placeholder="+977 Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold" htmlFor="address">
                Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold" htmlFor="email">
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-700 text-sm font-bold" htmlFor="message">
                Message / questions:
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your message here..."
                rows="4"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="flex w-44 gap-2 bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSubmit}
              >
                Send Message
                <PaperIcon className='h-6' />
              </button>
            </div>
          </form>
          {showSuccessMessage && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="bg-green-500 text-white px-4 py-2 rounded">
                Thanks for connecting with us!
              </div>
            </div>
          )}
        </div>
      </AnimatedBox>
    </>
  );
};

export default ContactForm;
