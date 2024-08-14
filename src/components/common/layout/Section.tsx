import clsx from "clsx";
import React, { CSSProperties } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
};

const Section = ({ children, className, style }: Props) => {
  return (
    <div
      className={clsx(
        "laptop:gap-8 tablet:gap-6 gap-4 laptop:pt-10 laptop:pb-10 pt-5 pb-5",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default Section;
