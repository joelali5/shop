import { IoMdLogIn } from "react-icons/io";
import { useClerk } from "@clerk/clerk-react";

function Logout() {
  const { signOut } = useClerk();

  return (
    <IoMdLogIn
      className="text-2xl cursor-pointer text-gray-600 hover:text-black transition"
      onClick={() => signOut(() => (window.location.href = "/login"))}
    />
  );
}

export default Logout;