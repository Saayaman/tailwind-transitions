import { Link, Outlet, useLocation } from "react-router-dom";
import { menuList } from "../App";

function Root() {
  const location = useLocation();

  const Menu = ({ menuName }) => {
    return (
      <li>
        <Link
          className={`hover:text-sky-500 ${
            `/${menuName}` === location.pathname && "text-sky-500"
          }`}
          to={menuName}
        >
          {menuName}
        </Link>
      </li>
    );
  };

  return (
    <main className="flex flex-col gap-8 py-16 max-w-[1280px] px-4 mx-auto">
      <h1 className="text-4xl font-bold">Tailwind Transitions Cheat Sheet</h1>
      <nav>
        <ul className="flex gap-6 underline">
          {menuList.map((list) => (
            <Menu menuName={list} />
          ))}
        </ul>
      </nav>
      <Outlet />
    </main>
  );
}

export default Root;
