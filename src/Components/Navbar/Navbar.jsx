import { useState } from "react";
import Link from "../LInk/Link";
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Profile", path: "/profile/:id" },
  ];

  return (
    <nav className="text-white bg-slate-600 p-2 rounded-xl">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {
            open ===  true ? <RxCross1 className="text-2xl"></RxCross1> : <FaBars className="text-2xl"></FaBars>
        }
        
      </div>
      <ul className={`md:flex rounded-xl md:static absolute bg-slate-600 text-white p-5 duration-1000 ${open ? 'top-16' : '-top-60'}`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
