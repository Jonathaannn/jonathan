import { useState } from "react";
import Style from "./style.module.css";
import Modal from "../Modal";

function Card({ image, title, technologies, description, link }) {
  const [isActive, setIsActive] = useState(false);
  const activeModal = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className={Style.container} onClick={activeModal}>
        <div className={Style.image}>
          <img src={image} alt="Imagem do projeto" />
        </div>
        <h2 className={Style.title}>{title}</h2>
      </div>
      <Modal
        active={isActive}
        setActive={setIsActive}
        image={image}
        title={title}
        technologies={technologies}
        description={description}
        link={link}
      />
    </>
  );
}

export default Card;
