import {
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";

import { redirect } from "next/navigation";

const profile = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  if (!isUserAuthenticated) {
    return redirect("/api/auth/login?");
  }
  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-2xl font-bold">Welcome to your profile!</h1>
    </div>
  );
};

export default profile;
