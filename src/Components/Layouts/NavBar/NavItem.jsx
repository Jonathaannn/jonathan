import { NavLink } from "react-router-dom";
import Style from "./style.module.css"

function NavItem({ NamePage, Link, Icon }) {
  return (
    <NavLink to={Link} className={({isActive}) => (isActive ? Style.active : "")}>
      <Icon size={24} />
      {NamePage}
    </NavLink>
  );
}

export default NavItem;
