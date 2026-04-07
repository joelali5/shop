import { NavLink } from "react-router-dom";

function MobileViewNav() {
  return (
    <div className="flex flex-col gap-4 text-[16px]">
      <NavLink
        to="/men"
        className="hover:text-blue-400 text-stone-400 aria-[current=page]:text-blue-400 sm:aria-[current=page]:border-b-2 pb-2 sm:aria-[current=page]:border-blue-400"
      >
        Men
      </NavLink>
      <NavLink
        to="/jewellery"
        className="hover:text-blue-400 text-stone-400 aria-[current=page]:text-blue-400 sm:aria-[current=page]:border-b-2 pb-2 sm:aria-[current=page]:border-blue-400"
      >
        Jewellery
      </NavLink>
      <NavLink
        to="/women"
        className="hover:text-blue-400 text-stone-400 aria-[current=page]:text-blue-400 sm:aria-[current=page]:border-b-2 pb-2 sm:aria-[current=page]:border-blue-400"
      >
        Women
      </NavLink>
      <NavLink
        to="/electronics"
        className="hover:text-blue-400 text-stone-400 aria-[current=page]:text-blue-400 sm:aria-[current=page]:border-b-2 pb-2 sm:aria-[current=page]:border-blue-400"
      >
        Electronics
      </NavLink>
    </div>
  );
}

export default MobileViewNav;
