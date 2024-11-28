import { NavLink } from "react-router";
import "./AppNavigation.scss";

export type AppNav = {
  id: number | string;
  name: string;
  link: string;
};

const appNavItems: AppNav[] = [
  {
    id: 1,
    name: "Countries",
    link: "/",
  },
  {
    id: 2,
    name: "CountriesDetails",
    link: "/details",
  },
];

const AppNavigation = (): JSX.Element => {
  return (
    <div className="app-navigation">
      {appNavItems.map((nav) => {
        return (
          <NavLink key={nav.id} to={nav.link}>
            {nav.name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default AppNavigation;
