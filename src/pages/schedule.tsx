import React, { useEffect, useState } from "react";
import { Footer } from "~/components/Footer";
import { NavBar } from "~/components/Navbar";
import { CldImage } from "next-cloudinary";

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
          <CldImage
            alt=""
            height={0}
            src="tt-head_ixco8s"
            width={isMobileView ? 600 : 1200}
          />
        </div>
        <div className="mb-14 flex flex-wrap justify-center">
          <div className="mx-1">
            <CldImage alt="" height={0} src="tt-m-t_fr3s5u" width={400} />
          </div>
          <div className="mx-1">
            <CldImage alt="" height={0} src="tt-w-t_erxbss" width={400} />
          </div>
          <div className="mx-1">
            <CldImage alt="" height={0} src="tt-f-s_cyxxij" width={400} />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Schedule;
