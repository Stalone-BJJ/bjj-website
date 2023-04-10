import React from "react";
import { Footer } from "~/components/footer";
import { Heading } from "~/components/heading";
import { NavBar } from "~/components/navbar";
import { Subheading } from "~/components/subheading";
import Image from "next/image";
import { SectionHeading } from "~/components/sectionHeading";
import { ContentSection } from "~/components/contentSection";

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="m-20 text-center">
        <Heading headingText="Chorley BJJ Academy" />
        <Subheading subheadingText="Taking Limbs Since 1990" />
      </div>
      <div className="m-20 flex ">
        <ContentSection>
          <SectionHeading sectionHeadingText="Our School" />
          <div className="flex">
            <Image height="200" width="200" src="/bjj1.jpg" alt="alt tag" />
          </div>
        </ContentSection>
        <ContentSection>
          <SectionHeading sectionHeadingText="Why Us?" />
          <div className="">
            <div className="mb-5 flex justify-center">
              <Image
                height="200"
                width="200"
                src="/bjj2.jpg"
                alt="alt tag"
                className="m-1"
              />
              <Image
                height="200"
                width="200"
                src="/bjj2.jpg"
                alt="alt tag"
                className="m-1"
              />
              <Image
                height="200"
                width="200"
                src="/bjj2.jpg"
                alt="alt tag"
                className="m-1"
              />
            </div>
            <div>
              <p>
                Established in 2017 by multiple championship medalling black
                belt Matthew Callaghan. Gracie Barra Chorley has a fantastic
                location served by being directly opposite a large free public
                car park, next to the train station and very close to the M61
                motorway junction. Gracie Barra Chorley offers classes for
                children 5 years old and up all the way through to adults
                beginner classes and competitive training for those who want it.
              </p>
            </div>
          </div>
        </ContentSection>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
