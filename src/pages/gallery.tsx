import { NavBar } from "~/components/Navbar";
import { BeholdInstagram } from "~/components/BeholdInstagram";
import { BlackBelt } from "~/components/BlackBelt";

const Gallery = () => {
  return (
    <div
      className="min-h-screen bg-[length:150px_150px] bg-repeat pb-4"
      style={{
        backgroundImage: `url("/images/thumbnail_stalone-logo-4.png")`,
      }}
    >
      <NavBar />
      <div className="flex justify-center">
        <div className="mt-8 flex w-[220px] flex-col items-center">
          <h3 className="text-5xl font-bold italic text-white lg:mt-0">
            GALLERY
          </h3>
          <BlackBelt />
        </div>
      </div>
      <div className="flex justify-center">
        <BeholdInstagram />
      </div>
    </div>
  );
};

export default Gallery;
