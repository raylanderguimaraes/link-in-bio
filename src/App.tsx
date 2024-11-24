import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import { Analytics } from "@vercel/analytics/react";
import CardLink from "./components/CardLink.tsx";

// Futuramente essas informações podem vir de uma API
const URLS_ADDRESS = [
  {
    URL: "https://chat.whatsapp.com/BD6nhMymcJyKVs9UZpnecG",
    title: "Grupo WhatsApp",
  },
  { URL: "https://shpe.site/lojinhadajocastha?", title: "Lojinha da Shopee" },

  { URL: "/", title: "Amazon" },
];

export default function App() {
  return (
    <div className="w-full flex flex-col h-dvh bg-gradient-to-b from-orange-600 to-orange-300 pt-8 pb-2 items-center">
      <Header />
      {/* Fazer um efeito bacana de hover */}
      {/* Fazer efeito dos CardLinks aparecerem na tela ce baixo para cima, com framer motion */}

      <main className="w-11/12 md:w-[600px] flex flex-col flex-grow gap-4">
        {URLS_ADDRESS.map((item, index) => {
          if (!item.URL || !item.URL) return null;
          return <CardLink key={index} URL={item.URL} title={item.title} />;
        })}
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
