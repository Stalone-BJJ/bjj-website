import React from "react";
import { Footer } from "~/components/Footer";
import { NavBar } from "~/components/Navbar";
import Image from "next/image";

const Schedule = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="">
        <div className="mx-10 my-8 flex justify-center">
          <Image
            alt=""
            height={0}
            src="/images/timetable/tt-head.jpg"
            width={1200}
          ></Image>
        </div>
        <div className="mb-14 flex flex-wrap justify-center">
          <div className="mx-1">
            <Image
              alt=""
              height={0}
              src="/images/timetable/tt-m-t.jpg"
              width={400}
            ></Image>
          </div>
          <div className="mx-1">
            <Image
              alt=""
              height={0}
              src="/images/timetable/tt-w-t.jpg"
              width={400}
            ></Image>
          </div>
          <div className="mx-1">
            <Image
              alt=""
              height={0}
              src="/images/timetable/tt-f-s.jpg"
              width={400}
            ></Image>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Schedule;
