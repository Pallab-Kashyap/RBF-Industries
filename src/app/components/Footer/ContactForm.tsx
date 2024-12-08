"use client";

import sendMail from "@/utils/mailService";
import React, { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const [emailState, setEmailState] = useState(false);

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailState(true);
    const res: { status: boolean } = await sendMail(formData);
    setEmailState(false);

    if(res.status)
      toast.success("Email sent successfully we will contact you soon");
    else toast.error("Oops something went wrong please try again later")
  };


  // ANIMATION
  

  return (
    <div className="relative space-y-5 bg-[#EEFFEE] rounded-xl px-6 py-8 sm:py-8 mx-auto sm:mx-none w-full  sm:w-[450px]">
      <ToastContainer 
        autoClose={3000}
        position="top-right"
      />
      <div>
        <p className="text-3xl font-semibold">Get in Touch</p>
        <p>You can reach us any time</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-5 ">
        <div className="flex flex-col sm:flex-row gap-5 text-black">
          {/* <div className="sm:w-1/2 relative"> */}
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            className="sm:w-full px-4 py-1 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <p 
          className={` absolute top-[10%] left-4 hidden`}
          >first name</p>
          {/* </div> */}
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            className="sm:w-1/2 px-4 py-1 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="sm:w-1/2 px-4 py-1 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="number"
            name="phone"
            placeholder="Mobile No."
            value={formData.phone}
            onChange={handleInputChange}
            className="sm:w-1/2 px-4 py-1 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <textarea
          name="message"
          placeholder="How can we help you ?"
          value={formData.message}
          onChange={handleInputChange}
          className="w-full p-4 h-20 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
        <button
          type="submit"
          className={`w-full ${
            emailState ? "" : "py-3"
          } bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md`}
        >
          {emailState ? (
            <div className="flex justify-center">
              <img
                src="/assets/mailLoadingAnimation.gif"
                alt=""
                className="h-12"
              />
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>

      <div>
        <p className="text-2xl font-medium">Contact Us</p>

        <div className="pt-2 flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between">

          <div className="flex gap-3 sm:gap-2 items-center">
            <img src="/assets/contactUsCallSVG.svg" alt="" className="h-11 hidden sm:block" />
            <img src="/assets/contactUsCallSVGMobile.svg" alt="" className="h-8 sm:hidden" />
            <div className=" text-base sm:text-sm">
              <p>Phone</p>
              <p>+91 9666357917</p>
            </div>
          </div>

          <div className="flex gap-3 sm:gap-2 items-center">
            <img src="/assets/contactUsMailSVG.svg" alt="" className="h-11 hidden sm:block "/>
            <img src="/assets/contactUsMailSVGMobile.svg" alt="" className="h-7 sm:hidden" />
            <div className="text-base sm:text-sm">
              <p>Email</p>
              <p>info@rbfindustries.in</p>
            </div>
          </div>

        </div>
      </div>

      <div className="">
        <p className="text-[10px]">Ravi Bio Fuel Industries is committed to protecting and respecting your privacy. We use your personal data to respond to your contact requests.</p>
      </div>
    </div>
  );
};

export default ContactForm;
