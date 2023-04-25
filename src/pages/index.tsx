import React from "react";
import { Footer } from "~/components/Footer";
import { NavBar } from "~/components/Navbar";
import { Subheading } from "~/components/Subheading";
import Image from "next/image";
import { ContactForm } from "~/components/ContactForm";
import { BlackBelt } from "~/components/BlackBelt";
import { Instructor } from "~/components/Instructor";
import instructors from "~/data/instructors.json";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

type Instructor = {
  image: string;
  name: string;
  title: string;
  location: string;
};

const Home = () => {
  const coaches = instructors as Instructor[];

  const scrollToView = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <React.Fragment>
      <NavBar />
      <div className="flex scroll-mt-[72px] flex-col" id="hero-banner">
        <div className="relative h-full border-b-2 border-red-600 lg:h-[960px]">
          <CldImage
            alt="Hero"
            className="hidden object-cover lg:block"
            fill
            src="image00003_mbbn0c"
          />
          <CldImage
            alt="Hero"
            className="object-cover lg:hidden"
            fill
            src="image00005"
          />
          <div className="absolute top-0 h-full w-full bg-gray-900 opacity-80" />
          <div className="absolute top-0 mt-4 flex w-full justify-center">
            <div className="text-center text-white">
              <CldImage
                alt="Hero"
                className="-mb-4 rounded bg-white object-cover"
                height={150}
                src="thumbnail_stalone-header_vcc2xx"
                width={450}
              />
              <Subheading>
                EST<span className="text-red-600">.</span> 2017
              </Subheading>
            </div>
          </div>
          <div className="relative flex h-full w-full flex-col items-center justify-evenly text-white lg:top-0 lg:flex-row lg:justify-around">
            <div>
              <h2 className="mt-56 text-4xl font-bold lg:mt-0">
                JIU<span className="text-red-600">-</span>JITSU
                <br />
                <span className="italic text-red-600">FOR EVERYONE</span>.
                <div className="mb-2 hidden w-[275px] lg:block">
                  <BlackBelt />
                </div>
              </h2>
              <p className="text-xl">
                Getting started at Stalone BJJ Academy is easy
                <span className="text-red-600">.</span>
                <br />
                Book your free trial class today
                <span className="text-red-600">.</span>
              </p>
            </div>
            <div
              className="my-12 w-[90%] rounded-lg bg-slate-400/50 p-4 backdrop-blur-md sm:w-[448px] lg:mt-48"
              id="contact-form"
            >
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="relative h-full border-b-2 border-red-600">
          <CldImage
            alt="Our Schools"
            className="object-cover"
            fill
            src="image00015_gddgz1"
          />
          <div className="absolute top-0 h-full w-full bg-gray-900 opacity-90" />
          <div className="relative flex h-full w-full flex-col items-center justify-center">
            <div className="mt-8 flex flex-col items-center">
              <h3 className="text-5xl font-bold italic text-white lg:mt-0">
                OUR SCHOOL
              </h3>
              <BlackBelt />
            </div>
            <p className="my-8 w-[480px] text-xl text-white lg:mt-8 lg:w-[720px] lg:text-lg">
              Previously Gracie Barra Chorley
              <span className="text-red-600">,</span> we want our school to be a
              showcase for all that Brazilian Jiu
              <span className="text-red-600">-</span>Jitsu is
              <span className="text-red-600">.</span> We wanted to break the
              concept of a martial arts gym
              <span className="text-red-600">;</span> we wanted a facility that
              is not shared<span className="text-red-600">,</span> is spotlessly
              clean and which operates full time
              <span className="text-red-600">.</span> Our facility includes
              large mat space<span className="text-red-600">,</span>{" "}
              refreshments<span className="text-red-600">,</span> changing
              facilities and more<span className="text-red-600">.</span>
            </p>
            <CldImage
              alt="Cutting Shapes"
              className="my-8 rounded bg-red-600"
              height={120}
              src="chorley-school_uunflm"
              width={120}
            />
          </div>
        </div>
        <div className="relative h-full border-b-2 border-red-600">
          <CldImage
            alt="Our Schools"
            className="hidden object-cover lg:block"
            fill
            src="image00036_qyntvw"
          />
          <CldImage
            alt="Our Schools"
            className="object-cover lg:hidden"
            fill
            src="image00017_c_te4csx"
          />
          <div className="absolute top-0 h-full w-full bg-gray-900 opacity-80" />
          <div className="relative flex h-full flex-col items-center justify-center">
            <div>
              <h3 className="mt-8 text-5xl font-bold italic text-white">
                MEET OUR INSTRUCTORS
              </h3>
              <BlackBelt />
            </div>
            <p className="my-8 w-[480px] text-xl text-white lg:w-[720px] lg:text-lg">
              All of our instructors are trained to the highest standards
              through various industry leading Instructor Certification
              Programmes<span className="text-red-600">,</span> ensuring the
              best possible experience for students
              <span className="text-red-600">.</span>
            </p>
            <div className="lg:flex lg:w-[1080px] lg:flex-wrap lg:justify-center lg:gap-x-8">
              {coaches.map((instructor) => (
                <Instructor
                  image={instructor.image}
                  key={instructor.name}
                  location={instructor.location}
                  name={instructor.name}
                  title={instructor.title}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="relative h-full">
          <CldImage
            alt="Get in Touch"
            className="object-cover"
            fill
            src="get-in-touch_spzr5m"
          />
          <div className="absolute top-0 h-full w-full bg-gray-900 opacity-90" />
          <div className="relative flex h-full flex-col items-center justify-center">
            <div>
              <h3 className="mt-8 text-5xl font-bold italic text-white">
                GET IN TOUCH
              </h3>
              <BlackBelt />
            </div>
            <p className="mt-8 mb-4 w-[480px] text-xl text-white lg:w-[720px] lg:text-lg">
              Please feel free to visit us at our academy. If visiting for the
              first time we recommend booking in so then you can be shown around
              and all questions answered.
            </p>
            <p className="mb-8 w-[480px] text-xl font-bold text-white lg:w-[720px] lg:text-lg">
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
              <br />
              <span
                className="cursor-pointer hover:text-gray-400"
                onClick={() => scrollToView("hero-banner")}
              >
                Or use our form above.
              </span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
