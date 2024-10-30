"use client"

import  sendMail  from '@/utils/mailService';
import React, { useState } from 'react';


interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

// const ContactForm: React.FC<any> = ({setShowPopup, setPopMessage}) => {
const ContactForm: React.FC = () => {

  const [ emailState, setEmailState ] = useState(false)

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: "",
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailState(true)

    await sendMail(formData)
    // const popMsg = res.status ? 'Email sent successfully we will contact you soon' : 'Oops something went wrong please try later'
    // const res = await sendMail(formData)
   // const popMsg = res.status ? 'Email sent successfully we will contact you soon' : 'Oops something went wrong please try later'
    // setPopMessage(popMsg)
    setEmailState(false)
    // setShowPopup(true)
  };

  return (
    <div className="flex px-4">
      <div className='hidden sm:block'>
        <img 
          // src={contactImg}
          src= '/assets/contactUs.svg'
          alt = 'ifvemn['
          // style={{height: '100%'}}
          className='h-full object-cover rounded-l-xl'
        />
      </div>
      <div className=" bg-gray-800 rounded-xl sm:rounded-l-none shadow-lg px-6 py-8 sm:py-4 mx-auto sm:mx-none w-full sm:w-auto">
        <h4 className="text-2xl font-bold text-white mb-3 text-center sm:text-left">Contact Us</h4>
        <form onSubmit={handleSubmit} className="space-y-6 ">
          
          <div className='flex flex-col sm:flex-row gap-5'>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            className=" px-4 py-1 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            className=" px-4 py-1 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          </div>

          <div className='flex flex-col sm:flex-row gap-5'>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className=" px-4 py-1 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="number"
            name="phone"
            placeholder="Mobile No."
            value={formData.phone}
            onChange={handleInputChange}
            className=" px-4 py-1 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-4 h-20 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className={`w-full ${emailState ? '' : 'py-3'} bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md`}
          >
            { emailState ?  
            (
              <div className='flex justify-center'>
                <img src="/assets/mailLoadingAnimation.gif" alt="" className='h-12'/>
              </div>
            )
            : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
