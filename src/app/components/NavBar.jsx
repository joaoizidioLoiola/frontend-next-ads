"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className=" text-neutral-400 flex gap-3 border-b-4 border-b-orange-600">
        <li className={`${pathname === "/" && "text-orange-600"}`}>
          <Link href="/"> Home</Link>
        </li>
        <li className={`${pathname === "/dashboard" && "text-orange-600"}`}>
          <Link href="/dashboard"> Dashboard</Link>
        </li>
        <li className={`${pathname === "/contato" && "text-orange-600"}`}>
          <Link href="/contato"> Contato</Link>
        </li>
      </ul>
    </nav>
  );
};
