import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import { motion } from "motion/react";
export default function App() {
  return (
    <div className="w-full flex flex-col h-dvh bg-gradient-to-b from-orange-600 to-orange-300 pt-8 pb-2 items-center">
      <Header />
      {/* Transformar os elementos de cada link num componente */}
      {/* Fazer um efeito bacana de hover */}
      {/* Colocar efeito utilizando o frame motion */}
      <main className="w-11/12 md:w-[600px] flex flex-col flex-grow gap-4">
        <motion.li
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full list-none bg-white rounded-xl p-4 text-center shadow-lg ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://chat.whatsapp.com/BD6nhMymcJyKVs9UZpnecG">
            <p>Grupo WhatsApp</p>
          </a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full list-none bg-white rounded-xl p-4 text-center shadow-lg ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://shpe.site/lojinhadajocastha?fbclid=PAZXh0bgNhZW0CMTEAAaZOJ6ffYie-eUqupbDVtJcT0vBz3OIzMjPGUwFmVdyPYscl07YueTn-V0s_aem_TzJ4hkRh3XUT2PTTwNivlg">
            <p>Lojinha Shopee</p>
          </a>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full list-none bg-white rounded-xl p-4 text-center shadow-lg ">
          <a rel="noopener noreferrer" href="/">
            <p>Amazon</p>
          </a>
        </motion.li>
      </main>
      <Footer />
    </div>
  );
}
