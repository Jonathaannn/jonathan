import Style from "./style.module.css";

function Cards({children}) {
  return (
    <div className={Style.container}>
      {children}
    </div>
  );
}

export default Cards;
