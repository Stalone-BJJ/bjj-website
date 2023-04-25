import { ContactForm } from "~/components/ContactForm";
import { Footer } from "~/components/Footer";
import { NavBar } from "~/components/Navbar";
import Image from "next/image";
import { BlackBelt } from "~/components/BlackBelt";
import dynamic from "next/dynamic";
import Link from "next/link";

const Contact = () => {
  const Map = dynamic(() => import("~/components/Map").then((mod) => mod.Map), {
    ssr: false,
  });

  return (
    <>
      <NavBar />
      <div className="flex flex-col">
        <div className="relative border-b-2 border-red-600 text-center">
          <div className="h-[380px] w-full">
            <Image
              alt=""
              className="object-cover"
              fill
              src="/images/get-in-touch.webp"
            />
            <div className="absolute top-0 h-full w-full bg-gray-900 opacity-90" />
          </div>
          <div className="absolute top-0 flex h-full w-full items-center justify-center text-center text-white">
            <div className="m-4">
              <div className="flex w-full flex-col items-center">
                <div className="w-[300px]">
                  <h2 className="mb-2 text-5xl font-bold italic">CONTACT US</h2>
                  <BlackBelt />
                </div>
              </div>
              <p className="mt-8 mb-4 w-[480px] text-left text-xl text-white lg:w-[720px] lg:text-lg">
                Please feel free to visit us at our academy. If visiting for the
                first time we recommend booking in so then you can be shown
                around and all questions answered.
              </p>
              <p className="mb-8 w-[480px] text-left text-xl font-bold text-white lg:w-[720px] lg:text-lg">
                T:{" "}
                <Link
                  className="underline decoration-red-600 decoration-2 hover:text-gray-400"
                  href="tel:07540586726"
                >
                  07540 586726
                </Link>
                <br />
                E:{" "}
                <Link
                  className="underline decoration-red-600 decoration-2 hover:text-gray-400"
                  href="mailto:contact@stalonebjj.co.uk"
                >
                  contact@stalonebjj.co.uk
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="h-full w-full" id="contact-us-hero">
            <Image
              alt=""
              className="object-cover"
              fill
              src="/images/image00029.webp"
            />
            <div className="absolute top-0 h-full w-full bg-gray-900 opacity-80" />
          </div>
          <div className="flex h-full w-full flex-col lg:absolute lg:top-0 lg:flex-row lg:justify-center">
            <div className="mt-4 flex w-full items-center justify-center lg:mt-0 lg:w-1/2">
              <div
                className="mx-8 flex w-full items-center justify-center rounded-lg bg-slate-400/50 p-4 backdrop-blur-md sm:mx-0 sm:w-[448px] lg:relative lg:my-auto lg:ml-4"
                id="contact-form"
              >
                <ContactForm />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="relative mt-8 w-[160px] lg:mt-0">
                <h3 className="mb-2 text-center text-4xl font-bold italic text-white">
                  VISIT US
                </h3>
                <BlackBelt />
              </div>
              <div className="flex w-full items-center justify-center p-8 lg:w-1/2">
                <div className="h-[480px] w-[480px] bg-slate-200">
                  <Map />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
