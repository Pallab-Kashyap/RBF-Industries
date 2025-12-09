// components/Footer.tsx

import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="overflow-hidden rounded-xl flex-1">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3802.2045176249485!2d78.55074400000001!3d17.64047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDM4JzI1LjciTiA3OMKwMzMnMDIuNyJF!5e0!3m2!1sen!2sin!4v1765304712510!5m2!1sen!2sin"
        className="h-[60vh] sm:h-full w-full"
        style={{ border: "0" }}
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Footer;
