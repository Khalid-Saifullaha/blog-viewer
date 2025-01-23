import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default async function Navbar() {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  return (
    <nav className="bg-teal-800 text-white p-4 flex justify-between items-center px-8 shadow-lg rounded-lg">
      <div>
        <Link href="/" className="text-2xl font-extrabold text-white">
          Blog Viewer
        </Link>
      </div>
      <div className="flex space-x-6">
        <Link
          href="/"
          className="text-lg font-medium hover:text-teal-300 transition duration-200"
        >
          Home
        </Link>
        <Link
          href="/profile"
          className="text-lg font-medium hover:text-teal-300 transition duration-200"
        >
          Profile
        </Link>

        {isUserAuthenticated ? (
          <LogoutLink>
            <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition duration-200">
              Logout
            </button>
          </LogoutLink>
        ) : (
          <LoginLink>
            <button className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition duration-200">
              Login
            </button>
          </LoginLink>
        )}
      </div>
    </nav>
  );
}
