import Style from "./style.module.css";

function Box({ children, customClass }) {
  return (
    <div className={`${Style.container} ${Style[customClass]}`}>{children}</div>
  );
}

export default Box;
