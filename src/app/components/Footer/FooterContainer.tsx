// pages/index.tsx
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import Clients from "./Clients";

const HomePage: React.FC = () => {
  return (
    <div className="">
      <Clients />
      <div className="sm:flex  justify-between px-4 sm:px-12 py-6 pt-10">
        <Footer />
        <ContactForm />
      </div>
      <div className="sm:flex justify-between sm:px-12 mt-8 border-t pb-6  border-gray-300 py-6">
        <p className="text-[14px] text-gray-600 mb-4 sm:mb-0 text-center sm:text-left">
          © 2024 Nextbitt. All rights reserved.
        </p>
        <div className="flex gap-4 flex-wrap justify-evenly">
          <a href="#" className="text-[14px] text-gray-600 hover:underline">
            Customer support
          </a>
          <a href="#" className="text-[13px] text-gray-600 hover:underline">
            Whistleblower Channel
          </a>
          <a href="#" className="text-[13px] text-gray-600 hover:underline">
            Privacy and Cookies Policy
          </a>
          <a href="#" className="text-[13px] text-gray-600 hover:underline">
            Management System Policy
          </a>
          <a href="#" className="text-[13px] text-gray-600 hover:underline">
            Compliment, Suggestion and Complaint Book
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
