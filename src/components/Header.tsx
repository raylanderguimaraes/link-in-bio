import perfil from "../assets/photo_bio.jpeg";
import { motion } from "motion/react";

export default function Header() {
  // Fazer com que esse componente receba props para receber as informações de cada usuário, ao invés de deixar as informações fixas
  // Foto do usuário
  // Titulo escolhido pelo usuário
  // "@ escolhido pelo usuário"

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.1, ease: "linear" }}
      className="flex flex-col items-center mb-12">
      <div className=" box w-[150px] h-[150px] mb-4">
        <img
          className="w-full h-full rounded-full border-4"
          src={perfil}
          alt="Foto do perfil"
          title="Foto do perfil"
        />
      </div>
      <div className="text-center">
        <h1 className="font-semibold text-xl">Achadinhos da Jocastha</h1>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/achadinhos_da_jocastha">
          <p className="text-zinc-700">@achadinhos_da_jocastha</p>
        </a>
      </div>
    </motion.div>
  );
}
