import { signIn } from "@/auth";
import Image from "next/image";

export function SignIn() {
  return (
    <>
      <form
        className="flex items-center justify-center"
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button
          className="flex items-center bg-white  border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          type="submit"
        >
          <Image
            className="w-6 h-6"
            width={6}
            height={6}
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
          />
          <span>Login with Google</span>
        </button>
      </form>
    </>
  );
}
