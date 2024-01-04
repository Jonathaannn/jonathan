import { AiOutlineUser } from "react-icons/ai";
import { BsArchive } from "react-icons/bs"
import { FiMail } from "react-icons/fi";

import Style from "./style.module.css";
import NavItem from "./NavItem";

function NavBar() {
  const routes = [
    { NamePage: "Sobre", Link: "/jonathan", Icon: AiOutlineUser },
    { NamePage: "Portfólio", Link: "/portfolio", Icon: BsArchive },
    { NamePage: "Contato", Link: "/contact", Icon: FiMail },
  ];

  return (
    <div className={Style.container}>
      <div className={Style.profile}>
        <div></div>
        <h2>Jonathan César</h2>
      </div>
      <nav className={Style.navItens}>
        {routes.map((element, index) => (
          <NavItem
            NamePage={element.NamePage}
            Link={element.Link}
            Icon={element.Icon}
            key={index}
          />
        ))}
      </nav>
      <div className={Style.footer}>
          <p>Jonathan César | 2023.</p>
      </div>
    </div>
  );
}

export default NavBar;
