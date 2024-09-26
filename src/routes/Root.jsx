import { Link, Outlet, useLocation } from "react-router-dom";
import { menuList } from "../App";
import MultipleTransitions from "./MultipleTransitions";

function Root() {
  const location = useLocation();

  const Menu = ({ menuName }) => {
    const linkName = menuName === menuList[0] ? '' : menuName
    return (
      <li>
        <Link
          className={`hover:text-sky-500 ${
            `/${linkName}` === location.pathname && "text-sky-500"
          }`}
          to={linkName}
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
      {location.pathname === '/' ? <MultipleTransitions /> : <Outlet />}
    </main>
  );
}

export default Root;
