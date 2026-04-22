import { Link, NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getCart } from "../features/cart/cartSlice";
import { useUser, UserButton } from "@clerk/clerk-react";

const navLinks = [
  { name: "Men", path: "/men" },
  { name: "Jewellery", path: "/jewellery" },
  { name: "Women", path: "/women" },
  { name: "Electronics", path: "/electronics" },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const numCartItems = useSelector(getCart).length;

  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) return null;

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Shop logo"
            className="h-16 w-auto object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-black font-medium"
                  : "text-gray-500 hover:text-black transition"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {isSignedIn ? (
            <>
              <span className="hidden sm:block text-sm text-gray-600">
                Hi, {user?.firstName || "User"} 👋
              </span>

              <UserButton afterSignOutUrl="/" />
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm text-gray-600 hover:text-black"
              >
                Login
              </Link>
              <Link to="/signup" className="text-sm text-black font-medium">
                Sign up
              </Link>
            </>
          )}

          <Link to="/cart" className="relative group">
            <BsCart4 className="text-xl text-gray-700 group-hover:text-black transition" />
            {numCartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] px-1.5 py-[2px] rounded-full">
                {numCartItems}
              </span>
            )}
          </Link>

          <button
            className="md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <IoClose className="text-2xl" />
            ) : (
              <IoMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4 text-gray-600 bg-white border-t">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-black font-medium"
                  : "hover:text-black transition"
              }
            >
              {link.name}
            </NavLink>
          ))}

          {!isSignedIn && (
            <>
              <Link to="/login" onClick={() => setIsOpen(false)}>
                Login
              </Link>
              <Link to="/signup" onClick={() => setIsOpen(false)}>
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navigation;
