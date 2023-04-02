import { type PropsWithChildren } from "react";

export const Heading = ({ children }: PropsWithChildren) => (
  <h1 className="m-5 text-5xl font-bold leading-none tracking-tight">
    {children}
  </h1>
);
