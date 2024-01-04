import Style from "./style.module.css"

function Container({children, customClass}) {
    return (
        <div className={`${Style.container} ${Style[customClass]}`}>
            {children}
        </div>
    )
}

export default Container