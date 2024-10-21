// pages/index.tsx
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import Clients from "./Clients";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <div className="">
      <Clients />
      <div className="sm:flex  justify-between px-4 sm:px-12 py-6 pt-10">
        <ContactForm />
        <Footer />
      </div>
      <div className="sm:flex justify-between px-8 sm:px-12 mt-8 border-t pb-6  border-gray-300 py-6">
        <p className="text-[14px] text-gray-600 mb-4 sm:mb-0">
          © 2024 Nextbitt. All rights reserved.
        </p>
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-4 flex-wrap justify-evenly">
          <div>
            <Link href="#about" className="text-[14px] text-gray-600 hover:underline">
              Customer support
            </Link>
          </div>
          <div>
            <a href="/about" className="text-[13px] text-gray-600 hover:underline">
              Whistleblower Channel
            </a>
          </div>
          <div>
            <a href="#" className="text-[13px] text-gray-600 hover:underline">
              Privacy and Cookies Policy
            </a>
          </div>
          <div>
            <a href="#" className="text-[13px] text-gray-600 hover:underline">
              Management System Policy
            </a>
          </div>
          <div>
            <a href="#" className="text-[13px] text-gray-600 hover:underline">
              Compliment, Suggestion and Complaint Book
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
