interface HeadingProps {
  title: string;
}

export default function Heading({ title }: HeadingProps) {
  return <h1 className="text-2xl font-semibold tracking-wide">{title}</h1>;
}
