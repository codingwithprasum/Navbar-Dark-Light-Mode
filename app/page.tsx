import Image from "next/image";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <header>
      <nav className="flex bg-gray-700 px-4 py-3 items-center justify-around text-white">
        <div className="logo font-extrabold text-2xl">UI/UX</div>
        <ul className="flex gap-4 font-semibold">
          <li className="hover:text-lg cursor-pointer">Home</li>
          <li className="hover:text-lg cursor-pointer">About</li>
          <li className="hover:text-lg cursor-pointer">Services</li>
          <li className="hover:text-lg cursor-pointer">Contact</li>
        </ul>
       <ModeToggle/>
      </nav>
    </header>
  );
}
