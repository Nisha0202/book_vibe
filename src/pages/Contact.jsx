

import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send email or save data)
    console.log('Form submitted:', formData);
    // You can add your logic here to send the form data to your backend or email service
  };
  return (
    <div className='w-full grid lg:pt-16 place-items-center h-full'>
          <div className="contact-page  flex flex-col gap-4 items-center">
      <h1 className=' my-3 font-bold'>Contact Me</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <div className="form-group flex justify-between">
          <label htmlFor="name">Name:</label>
          <input
          className='border-2 ml-4'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group flex justify-between ">
          <label htmlFor="email">Email:</label>
          <input
              className='border-2 ml-4'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group flex items-start justify-between ">
          <label htmlFor="message">Message:</label>
          <textarea
              className='border-2 ml-4'
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            required
          />
        </div>
        <button type='submit' className=" btn btn-primary">Send Message</button>
      </form>
    </div>



    </div>
  )
}





