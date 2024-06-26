import { auth, signOut } from "@/auth";
import { SignIn } from "./SignIn";

async function AuthButton() {
  const session = await auth();

  return (
    <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      {session?.user ? (
        <>
          Signed in as {session.user.email} <br />
          <form
            action={async (formData) => {
              "use server";
              await signOut();
            }}
          >
            <button
              className="flex items-center bg-white border border-gray-300 rounded-lg shadow-md px-2 py-1 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              type="submit"
            >
              Sign out
            </button>
          </form>
          {/* <button onClick={() => console.log("sign in")}>Sign out</button> */}
        </>
      ) : (
        <>
          <SignIn />
        </>
      )}
    </div>
  );
}

export default AuthButton;
