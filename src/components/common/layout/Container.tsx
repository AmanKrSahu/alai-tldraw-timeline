import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="mx-auto desktop:container">
      <div className="p-6 tablet:p-8 laptop:p-10">{children}</div>
    </div>
  );
};

export default Container;
