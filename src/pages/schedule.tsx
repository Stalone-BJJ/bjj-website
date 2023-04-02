import React from "react";
import { ClassTimetable } from "~/components/classTimetable";
import { Footer } from "~/components/footer";
import { Heading } from "~/components/heading";
import { NavBar } from "~/components/navbar";
import { Subheading } from "~/components/subheading";

const Schedule = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="m-20 text-center">
        <Heading>Schedule</Heading>
        <Subheading>Our Schedule and Class Selection</Subheading>
      </div>
      <div className="m-20">
        <ClassTimetable />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Schedule;
