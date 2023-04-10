import Image from "next/image";
import { useEffect, useState } from "react";

export interface InstructorProps {
  name: string;
  title: string;
  image: string;
  location: string;
}

export const Instructor = ({
  name,
  title,
  image,
  location,
}: InstructorProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== undefined) {
      setIsMobile(window.innerWidth < 768);
    }
  }, []);

  return (
    <div className="mt-4 mb-8 text-white">
      <Image
        alt=""
        height={isMobile ? 360 : 180}
        src={image}
        width={isMobile ? 480 : 240}
      />
      <h4 className="mt-2 text-4xl font-bold uppercase italic lg:text-2xl">
        {name}
      </h4>
      <p className="text-xl lg:text-sm">
        {title}
        <br />
        {location}
      </p>
    </div>
  );
};
