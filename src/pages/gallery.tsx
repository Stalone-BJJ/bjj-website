import { NavBar } from "~/components/Navbar";
import { BeholdInstagram } from "~/components/BeholdInstagram";
import { BlackBelt } from "~/components/BlackBelt";

const Gallery = () => {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center">
        <div className="mt-8 flex w-[220px] flex-col items-center">
          <h3 className="text-5xl font-bold italic lg:mt-0">GALLERY</h3>
          <BlackBelt />
        </div>
      </div>
      <BeholdInstagram />
    </div>
  );
};

export default Gallery;
