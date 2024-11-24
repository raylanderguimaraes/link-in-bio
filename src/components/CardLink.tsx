import { motion } from "motion/react";

interface CardProps {
  //   card_id: string;
  URL: string;
  title: string | "";
  className?: string;
}

export default function CardLink({
  //   card_id,
  URL,
  title,
  className,
}: CardProps) {
  return (
    <motion.li
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`w-full list-none bg-white rounded-xl p-4 text-center shadow-lg ${className}`}>
      <a target="_blank" rel="noopener noreferrer" href={URL}>
        <p>{title}</p>
      </a>
    </motion.li>
  );
}
