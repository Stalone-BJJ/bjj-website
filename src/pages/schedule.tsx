import React from "react";
import { Footer } from "~/components/Footer";
import { NavBar } from "~/components/Navbar";
import Image from "next/image";
import Head from "next/head";
import pagetitle from "~/utils/pagetitle";

const Schedule = () => {
  const title = pagetitle("Schedule");
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={title} name="twitter:title" />
      </Head>
      <NavBar />
      <div className="mb-20 mt-10 flex justify-center">
        <Image
          alt="timetable"
          height={1500}
          src="/stalone-bjj-timetable.JPG"
          width={1500}
        ></Image>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Schedule;
