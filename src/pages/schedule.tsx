import React from "react";
import { Footer } from "~/components/footer";
import { Heading } from "~/components/heading";
import { NavBar } from "~/components/navbar";
import { Subheading } from "~/components/subheading";
import Image from "next/image";

const Schedule = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="mb-10 flex justify-center">
        <Image
          alt="timetable"
          width={1500}
          height={1500}
          src="/stalone-bjj-timetable.JPG"
        ></Image>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Schedule;
