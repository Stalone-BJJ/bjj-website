import Image from "next/image";

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
}: InstructorProps) => (
  <div className="mt-4 mb-8 text-white">
    <Image alt="" height={180} src={image} width={240} />
    <h4 className="mt-2 text-2xl">{name}</h4>
    <p>
      {title}
      <br />
      {location}
    </p>
  </div>
);
