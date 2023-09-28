import { PropsWithChildren } from "react";

const beforeStyles = `
  before:md:w-32
  before:w-10
  before:content[""]
  before:block
  before:absolute
  before:bottom-0
  before:top-0
  before:z-10
  before:bg-gradient-to-r
  before:from-pill-bg
`;

const afterStyles = `
  after:md:w-32
  after:w-10
  after:content[""]
  after:block
  after:absolute
  after:bottom-0
  after:top-0
  after:right-0
  after:z-10
  after:bg-gradient-to-l
  after:from-pill-bg
`;

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={`
      w-full
      lg:w-1/2
      overflow-hidden
      grid gap-2
      relative
      ${beforeStyles}
      ${afterStyles}
    `}
    >
      {children}
    </div>
  );
};
