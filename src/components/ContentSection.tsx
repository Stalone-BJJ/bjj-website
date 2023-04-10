import { type PropsWithChildren } from "react";

export const ContentSection = ({ children }: PropsWithChildren) => {
  return <div className="mr-4 ml-4 h-3/6 w-6/12 text-center">{children}</div>;
};
