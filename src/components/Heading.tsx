import { type PropsWithChildren } from "react";

export const Heading = ({ children }: PropsWithChildren) => (
  <h1 className="m-5 text-4xl font-bold leading-none tracking-tight md:text-5xl lg:text-6xl">
    {children}
  </h1>
);
