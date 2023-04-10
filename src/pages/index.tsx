import React from "react";
import { Footer } from "~/components/Footer";
import { Heading } from "~/components/Heading";
import { NavBar } from "~/components/Navbar";
import { Subheading } from "~/components/Subheading";
import Image from "next/image";
import { ContactForm } from "~/components/ContactForm";
import { BlackBelt } from "~/components/BlackBelt";
import { Instructor } from "~/components/Instructor";
import instructors from "~/data/instructors.json";

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="flex flex-col">
        <div className="relative h-full lg:h-[960px]">
          <Image
            alt="Hero"
            fill
            src="/images/hero-banner.jpg"
            style={{ objectFit: "cover" }}
          />
          <div className="absolute top-0 h-full w-full bg-gray-900 opacity-60" />
          <div className="absolute top-0 mt-4 flex w-full justify-center">
            <div className="text-center text-white">
              <Heading>STALONE BJJ ACADEMY</Heading>
              <BlackBelt />
              <Subheading>EST. 2017</Subheading>
            </div>
          </div>
          <div className="relative flex h-full w-full flex-col items-center justify-evenly text-white lg:top-0 lg:flex-row lg:justify-around">
            <div>
              <h2 className="mt-56 text-4xl font-bold lg:mt-0">
                JIU-JITSU
                <br />
                <span className="italic">FOR EVERYONE.</span>
                <div className="mb-2 hidden w-[275px] lg:block">
                  <BlackBelt />
                </div>
              </h2>
              <p className="text-xl">
                Getting started at Stalone BJJ Academy is easy.
                <br />
                Book your free trial class today.
              </p>
            </div>
            <div className="my-12 w-[448px] rounded-lg bg-gray-500 p-4 lg:mt-48">
              <h3 className="text-bold mb-2 text-center text-3xl font-bold text-black">
                BOOK YOUR FREE CLASS
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="relative h-[420px]">
          <Image
            alt="Our Schools"
            fill
            src="/images/our-schools.jpg"
            style={{ objectFit: "cover" }}
          />
          <div className="absolute top-0 h-full w-full bg-gray-900 opacity-70" />
          <div className="relative flex h-full w-full flex-col items-center justify-center">
            <div className="flex flex-col items-center">
              <h3 className="text-4xl font-bold text-white">OUR SCHOOL</h3>
              <BlackBelt />
            </div>
            <p className="mt-4 w-[480px] text-center text-white lg:mt-8 lg:w-[720px]">
              Previously Gracie Barra Chorley, we want our school to be a
              showcase for all that Brazilian Jiu-Jitsu is. We wanted to break
              the concept of a martial arts gym; we wanted a facility that is
              not shared, is spotlessly clean and which operates full time. Our
              facility includes large mat space, refreshments, changing
              facilities and more.
            </p>
            <Image
              alt="Cutting Shapes"
              className="lg:mt-8"
              height={120}
              src="/images/chorley-school.svg"
              width={120}
            />
          </div>
        </div>
        <div className="relative h-full lg:h-[420px]">
          <Image
            alt="Our Schools"
            fill
            src="/images/coaches.jpg"
            style={{ objectFit: "cover" }}
          />
          <div className="absolute top-0 h-full w-full bg-gray-900 opacity-70" />
          <div className="relative flex h-full flex-col items-center justify-center">
            <div>
              <h3 className="mt-8 text-4xl font-bold text-white">
                MEET OUR INSTRUCTORS
              </h3>
              <BlackBelt />
            </div>
            <p className="mt-4 w-[480px] text-center text-white lg:w-[720px]">
              All of our instructors are trained to the highest standards
              through various industry leading Instructor Certification
              Programmes, ensuring the best possible experience for students.
            </p>
            <div className="lg:flex lg:gap-x-8">
              {instructors.map((instructor) => (
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
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
