import Style from "./style.module.css"

function SocialMedia({name, link, Icon}) {
    return (
        <a className={Style.link} href={link}>{name}<Icon size={24}/></a>
    )
}

export default SocialMedia