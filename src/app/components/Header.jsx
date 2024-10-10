import { VscGraphLine as LogoIFVest } from "react-icons/vsc";
import { FaRegUser as IconUser } from "react-icons/fa";

export default function Header({ isLogged, user }) {
  return (
    <div className="flex items-center p-5 h-14 bg-black dark:bg-neutral-700 justify-between">
      <LogoIFVest className="text-red-600 text-3xl " />
      {user && (
        <p>
          Olá {user?.nome}, você tem {user?.idade} anos
        </p>
      )}
      {isLogged && <IconUser className="text-white text-3xl" />}
    </div>
  );
}
