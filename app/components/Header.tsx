import { auth } from "@/auth";
import { SignIn } from "./SignIn";
import AuthButton from "./AuthButton";
import Image from "next/image";

async function Header() {
  const session = await auth();
  return (
    <header className="text-gray-600 body-font bg-blue-100">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image
            width={10}
            height={10}
            src="/images/logo.png"
            alt="Logo"
            className="w-10 h-10" //text-white p-2 bg-indigo-500 rounded-full
          />
          <span className="ml-3 text-xl">Cosmic Blueprint</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">About</a>
          <a className="mr-5 hover:text-gray-900">Success Stories</a>
        </nav>
        <AuthButton />
      </div>
    </header>
  );
}

export default Header;
