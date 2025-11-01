import { Github, Linkedin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-700 text-white mt-2 rounded-xl">
      <section className="w-full mb-6 grid grid-cols-1 md:grid-cols-3 justify-center">
        <div className="flex flex-col justify-center ml-5 gap-[8px] mt-5">
          <h1 className="text-[23px] font-semibold mt-2">Company</h1>
          <Link className="hover:text-gray-600 text-[16px]" to="/">
            Home
          </Link>
          <Link className="hover:text-gray-600 text-[16px]" to="/exchange">
            Exchange Rate
          </Link>
          <Link className="hover:text-gray-600 text-[16px]" to="/about">
            About
          </Link>
          <Link className="hover:text-gray-600 text-[16px]" to="/blog">
            Blog
          </Link>
          <Link className="hover:text-gray-600 text-[16px]" to="/contact">
            Contact
          </Link>
        </div>
        <div className="flex flex-col gap-[12px] -mt-2 justify-center">
          <h1 className="text-[22px] font-semibold">Links</h1>
          <Link to="/#testimonail">Testimonail</Link>
          <Link to="/#faq">Frequently Aasked Question</Link>
          <Link to="/#about">About</Link>
          <Link to="/#exchange">Exchange Rate</Link>
        </div>
        <div className="flex justify-center gap-4 flex-col ml-3.5">
          <h1 className="text-xl font-semibold">Contact</h1>
          <div className="flex items-center gap-2">
            <Phone />
            <Link to="tel:+93791359046" target="_blank">
              +93791359046
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin />
            <Link to="" target="_blank">
              LinkedIn
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <Github />
            <Link to="tel:+93791359046" target="_blank">
              Github
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <i className="fab fa-whatsapp text-2xl"></i>
            <Link to="https://wa.me/+93729125132" target="_blank">
              WhatsApp
            </Link>
          </div>
        </div>
      </section>
      <section className="text-center p-2 border-t text-base bg-gray-700 text-white w-full">
        <h1 className="">
          Copyright By Mohammad mohammadi 2025 all right resevred
        </h1>
      </section>
    </footer>
  );
}
