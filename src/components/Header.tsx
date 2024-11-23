import perfil from "../assets/photo_bio.jpeg";
import { motion } from "motion/react";

export default function Header() {
  return (
    <div className="flex flex-col items-center mb-12">
      <motion.div
        className=" box w-[150px] h-[150px] mb-4"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.1, ease: "linear" }}>
        <img
          className="w-full h-full rounded-full border-4"
          src={perfil}
          alt="Foto do perfil"
          title="Foto do perfil"
        />
      </motion.div>
      <div className="text-center">
        <h1 className="font-semibold text-xl">Achadinhos da Jocastha</h1>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/achadinhos_da_jocastha">
          <p className="text-zinc-700">@achadinhos_da_jocastha</p>
        </a>
      </div>
    </div>
  );
}
