import React, { useState } from 'react';
import "../../index.css";
import FooterPg from '../../assets/Contactme.png';

function Footer() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      // Check if server is reachable first
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add CORS headers if needed
          'Accept': 'application/json',
        },
        credentials: 'include', // Include credentials if using sessions
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        setStatus('success');
        setFormData({ fullName: '', email: '', message: '' });
      } else {
        const errorData = await response.json().catch(() => ({ message: 'Unknown error occurred' }));
        setStatus('error');
        setErrorMessage(errorData.message || `Server error: ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setErrorMessage(
        error.message === 'Failed to fetch'
          ? 'Unable to connect to the server. Please check if the server is running.'
          : 'An error occurred while sending your message. Please try again.'
      );
    }
  };

  const handleReset = () => {
    setFormData({ fullName: '', email: '', message: '' });
    setStatus('');
    setErrorMessage('');
  };

  return (
    <div className="w-screen m-0 p-0">
      <div 
        className="w-screen m-0 p-0 border-2 border-customBlue" 
        style={{
          backgroundImage: `url(${FooterPg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: 'auto',
          backgroundPosition: 'center',
        }}
      >
        <section id="MessageMe" className="max-w-3xl ml-16 my-10 text-gray-500">
          <h2 className="text-4xl font-black mb-1 mt-1">
            Still Curious?
          </h2>
          <p className="text-lg text-gray-700 mb-5 font-bold">
            Leave me a message, and I will reach out as soon as possible!
          </p>

          {status === 'success' && (
            <div className="mb-4 p-2 bg-green-100 text-green-700 rounded">
              Message sent successfully! Thank you for contacting me.
            </div>
          )}

          {status === 'error' && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
              {errorMessage || 'Failed to send message. Please try again later.'}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-4 pr-40"
          >
            <div className="flex flex-col space-y-2">
              <label htmlFor="fullName" className="text-gray-700 font-semibold">
                Full Name:
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="rounded w-full p-2 focus:ring-2 focus:ring-blue-500 w-[70%]"
                placeholder="Your Full Name"
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-gray-700 font-semibold">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="rounded w-full p-2 focus:ring-2 focus:ring-blue-500 w-[70%]"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-gray-700 font-semibold">
                Your Message:
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Write your message here..."
                className="rounded w-full p-2 focus:ring-2 resize-none focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex justify-start space-x-5">
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`bg-gray-500 text-white font-semibold py-2 px-6 rounded hover:bg-gray-600 ${
                  status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {status === 'sending' ? 'Sending...' : 'Submit'}
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="bg-gray-500 text-white font-semibold py-2 px-7 rounded hover:bg-gray-600"
              >
                Reset
              </button>
            </div>
          </form>
        </section>
      </div>
      <div className='w-screen flex justify-center py-2 text-gray-200 font-bold' style={{ backgroundColor: '#728099' }}>
        &copy;Whalecome! - My name is Han | 2025
      </div>
    </div>
  );
}

export default Footer;