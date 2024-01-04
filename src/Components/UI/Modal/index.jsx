import Style from "./style.module.css";
import TextContent from "../../Layouts/TextContent";

function Modal({ active, setActive, image, title, technologies, description, link }) {
  if (active) {
    return (
      <div className={Style.screen}>
        <div className={Style.container}>
          <div
            className={Style.image}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className={Style.info}>
            <TextContent title={title} paragraph={description} secundParagraph={technologies}/>
            <div className={Style.buttons}>
              <button onClick={() => window.location.assign(link)}>
                Acessar repositório
              </button>
              <button onClick={() => setActive(!active)}>
                Fechar informação
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Modal;
