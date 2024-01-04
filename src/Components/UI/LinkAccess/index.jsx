import { IoIosLink } from "react-icons/io";
import Style from "./style.module.css";

function LinkAccess({name, link, customClass}) {
    return (
        <a className={`${Style.link} ${Style[customClass]}`} href={link}>{name} <IoIosLink size={24}/></a>
    )
}

export default LinkAccess