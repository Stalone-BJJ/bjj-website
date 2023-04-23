import { ContactForm } from "~/components/ContactForm";
import { Footer } from "~/components/Footer";
import { NavBar } from "~/components/Navbar";
import { Map } from "~/components/Map";
import Image from "next/image";
import { BlackBelt } from "~/components/BlackBelt";

const Contact = () => {
  return (
    <>
      <NavBar />
      <div className="flex flex-col">
        <div className="relative text-center">
          <div className="h-[180px] w-full">
            <Image
              alt=""
              className="object-cover"
              fill
              src="/images/get-in-touch.webp"
            />
            <div className="absolute top-0 h-full w-full bg-gray-900 opacity-80" />
          </div>
          <div className="absolute top-0 flex h-full w-full items-center justify-center text-white">
            <div className="m-4 w-[300px]">
              <h2 className="mb-2 text-5xl font-bold italic">CONTACT US</h2>
              <BlackBelt />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col lg:flex-row">
          <div className="w-1/2 p-8" id="contact-form">
            <ContactForm />
          </div>
          <div className="ml-2 h-[480px] bg-slate-200">
            <Map />
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:bottom-0 lg:w-full">
        <Footer />
      </div>
    </>
  );
};

export default Contact;
