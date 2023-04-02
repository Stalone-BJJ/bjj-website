import React from "react";
import { ClassTimetable } from "~/components/ClassTimetable";
import { Footer } from "~/components/Footer";
import { Heading } from "~/components/Heading";
import { NavBar } from "~/components/Navbar";
import { Subheading } from "~/components/Subheading";

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
