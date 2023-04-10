export interface SectionHeadingProps {
  sectionHeadingText: string;
}

export const SectionHeading = ({ sectionHeadingText }: SectionHeadingProps) => {
  return (
    <div className="mb-5">
      <p className="xl:px-100 text-lg font-normal lg:text-xl">
        {sectionHeadingText}
      </p>
    </div>
  );
};
