interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-8">

      <h2 className="text-5xl font-serif font-bold">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-neutral-500">
          {subtitle}
        </p>
      )}

    </div>
  );
}