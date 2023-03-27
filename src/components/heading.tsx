export const Heading = ({ headingText }) => {
  return (
    <div className="mb-5">
      <h1 className="text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
        {headingText}
      </h1>
    </div>
  );
};
