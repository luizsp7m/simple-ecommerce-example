import clsx from "clsx";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
}

export default function SectionContainer({
  children,
  className,
}: SectionContainerProps) {
  return (
    <div
      className={clsx(
        "px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative",
        className
      )}
    >
      {children}
    </div>
  );
}
