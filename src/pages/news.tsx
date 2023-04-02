import React from "react";
import { Footer } from "~/components/footer";
import { Heading } from "~/components/heading";
import { NavBar } from "~/components/navbar";
import { SectionHeading } from "~/components/sectionHeading";
import { Subheading } from "~/components/subheading";
import { ContentSection } from "~/components/contentSection";

const News = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="m-20 text-center">
        <Heading>News</Heading>
        <Subheading>
          Why not check out some photos of us dismembering oponents
        </Subheading>
      </div>
      <div className="m-20 flex ">
        <ContentSection>
          <SectionHeading sectionHeadingText="News" />
          <div className="flex"></div>
        </ContentSection>
        <ContentSection>
          <SectionHeading sectionHeadingText="News" />
          <div className="flex"></div>
        </ContentSection>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default News;
