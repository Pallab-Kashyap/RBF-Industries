// components/Footer.tsx

import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="overflow-hidden rounded-xl flex-1">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15215.986943133721!2d78.3448502!3d17.5553421!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8ddfba9644c9%3A0x21080c4023d9f489!2sRavi%20Bio%20Fuel%20Industries!5e0!3m2!1sen!2sin!4v1732715301521!5m2!1sen!2sin"
        className="h-[60vh] sm:h-full w-full"
        style={{ border: "0" }}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Footer;
