import clsx from "clsx";

type Props = {
  heading: string;
  subheading?: string;
  className?: string;
  headclassName?: string;
  subclassName?: string;
};

const Header = ({
  heading,
  subheading,
  className,
  headclassName,
  subclassName,
}: Props) => {
  return (
    <div className={clsx("flex flex-col gap-4", className)}>
      <span
        className={clsx(
          "laptop:text-5xl mobile:text-4xl text-3xl font-bold",
          headclassName
        )}
      >
        {heading}
      </span>
      {subheading && (
        <span
          className={clsx("laptop:text-base mobile:sm text-xs", subclassName)}
        >
          {subheading}
        </span>
      )}
    </div>
  );
};

export default Header;
