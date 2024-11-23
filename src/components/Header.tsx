import perfil from "../assets/photo_bio.jpeg";

export default function Header() {
  return (
    <div className="flex flex-col items-center mb-12">
      <div className="w-[150px] h-[150px] mb-4">
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
    </div>
  );
}
