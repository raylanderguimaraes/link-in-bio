import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import { Analytics } from "@vercel/analytics/react";
import CardLink from "./components/CardLink.tsx";

import { motion } from "motion/react";

export default function App() {
  // Futuramente essas informações podem vir de uma API
  const URLS_ADDRESS = [
    {
      URL: "https://chat.whatsapp.com/BD6nhMymcJyKVs9UZpnecG",
      title: "Grupo WhatsApp",
    },
    { URL: "https://shpe.site/lojinhadajocastha?", title: "Lojinha da Shopee" },

    { URL: "/", title: "Amazon" },
  ];

  const containerLinks = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemLinks = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="w-full min-h-screen flex flex-col  bg-gradient-to-b from-orange-600 to-orange-300 pt-8 pb-2 items-center">
      <Header />
      {/* Fazer um efeito bacana de hover */}
      {/* Fazer efeito dos CardLinks aparecerem na tela ce baixo para cima, com framer motion */}

      <motion.ul
        variants={containerLinks}
        initial="hidden"
        animate="visible"
        className="w-11/12 md:w-[600px] flex flex-col flex-grow gap-4">
        {URLS_ADDRESS.map((item, index) => {
          if (!item.URL || !item.title) return null;
          return (
            <motion.li
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.0 }}
              key={index}
              variants={itemLinks}>
              <CardLink URL={item.URL} title={item.title} />
            </motion.li>
          );
        })}
      </motion.ul>
      <Footer />
      <Analytics />
    </div>
  );
}
