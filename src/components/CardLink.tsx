interface CardProps {
  URL: string;
  title: string;
  className?: string;
}

export default function CardLink({ URL, title, className }: CardProps) {
  return (
    <div
      className={`w-full list-none bg-white rounded-xl p-4 text-center shadow-lg ${className}`}>
      <a
        target={URL === "/" ? "_self" : "_blank"}
        rel="noopener noreferrer"
        href={URL}>
        <p>{title}</p>
      </a>
    </div>
  );
}
