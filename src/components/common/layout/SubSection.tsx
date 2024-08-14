import clsx from "clsx";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const SubSection = ({ children, className }: Props) => {
  return (
    <div
      className={clsx(
        "laptop:gap-5 gap-4 laptop:p-4 tablet:p-3 p-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SubSection;
