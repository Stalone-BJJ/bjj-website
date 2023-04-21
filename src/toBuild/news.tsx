import { Footer } from "~/components/Footer";
import { Heading } from "~/components/Heading";
import { NavBar } from "~/components/Navbar";
import { SectionHeading } from "~/components/SectionHeading";
import { Subheading } from "~/components/Subheading";
import { ContentSection } from "~/components/ContentSection";

const News = () => {
  return (
    <>
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
    </>
  );
};

export default News;
