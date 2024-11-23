import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";

export default function App() {
  return (
    <div className="w-full flex flex-col h-dvh bg-gradient-to-b from-orange-600 to-orange-300 pt-8 pb-2 items-center">
      <Header />
      {/* Transformar os elementos de cada link num componente */}
      {/* Fazer um efeito bacana de hover */}
      {/* Colocar efeito utilizando o frame motion */}
      <main className="w-11/12 md:w-[600px] flex flex-col gap-4 flex-grow">
        <div className="w-full bg-white rounded-xl p-4 text-center shadow-lg ">
          <a target="_blank" rel="noopener noreferrer" href="#">
            <p>Grupo WhatsApp</p>
          </a>
        </div>
        <div className="w-full bg-white rounded-xl p-4 text-center shadow-lg">
          <a target="_blank" rel="noopener noreferrer" href="#">
            <p>Lojinha Shopee</p>
          </a>
        </div>
        <div className="w-full bg-white rounded-xl p-4 text-center shadow-lg ">
          <a target="_blank" rel="noopener noreferrer" href="#">
            <p>Amazon</p>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
