import { type PropsWithChildren } from "react";

export const Subheading = ({ children }: PropsWithChildren) => (
  <h2 className="m-5 text-4xl">{children}</h2>
);
