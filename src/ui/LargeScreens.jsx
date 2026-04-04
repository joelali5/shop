import { NavLink } from "react-router-dom";

function LargeScreens() {
  return (
    <div className="sm:flex gap-4 text-[16px] hidden">
      <NavLink
        to="/clothes"
        className="hover:text-blue-400 text-stone-400 aria-[current=page]:text-blue-400 sm:aria-[current=page]:border-b-2 pb-2 sm:aria-[current=page]:border-blue-400"
      >
        Clothes
      </NavLink>
      <NavLink
        to="/shoes"
        className="hover:text-blue-400 text-stone-400 aria-[current=page]:text-blue-400 sm:aria-[current=page]:border-b-2 pb-2 sm:aria-[current=page]:border-blue-400"
      >
        Shoes
      </NavLink>

      <NavLink
        to="/furniture"
        className="hover:text-blue-400 text-stone-400 aria-[current=page]:text-blue-400 sm:aria-[current=page]:border-b-2 pb-2 sm:aria-[current=page]:border-blue-400"
      >
        Furniture
      </NavLink>
      <NavLink
        to="/electronics"
        className="hover:text-blue-400 text-stone-400 aria-[current=page]:text-blue-400 sm:aria-[current=page]:border-b-2 pb-2 sm:aria-[current=page]:border-blue-400"
      >
        Electronics
      </NavLink>
      <NavLink
        to="/miscellaneous"
        className="hover:text-blue-400 text-stone-400 aria-[current=page]:text-blue-400 sm:aria-[current=page]:border-b-2 pb-2 sm:aria-[current=page]:border-blue-400"
      >
        Others
      </NavLink>
    </div>
  );
}

export default LargeScreens;
