import React, { useEffect, useState } from "react";
import { Footer } from "~/components/Footer";
import { NavBar } from "~/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const Schedule = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      <div id="timetable">
        <div className="mx-10 my-8 flex justify-center">
          <Image
            alt=""
            height={0}
            src="/images/timetable/tt-head.jpg"
            width={isMobileView ? 600 : 1200}
          />
        </div>
        <Link
          href="/images/timetable/stalone-bjj-timetable.JPG"
          target="_blank"
        >
          <div className="flex flex-wrap justify-center">
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
        </Link>
        <div className="mx-10 mb-8 flex justify-center">
          <Image
            alt=""
            height={0}
            src="/images/timetable/tt-head.jpg"
            width={isMobileView ? 600 : 1200}
          />
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Schedule;
