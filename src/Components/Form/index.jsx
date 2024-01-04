import { useState } from "react";
import emailjs from "@emailjs/browser";
import Style from "./style.module.css";
import TextContent from "../Layouts/TextContent";

function Forms() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmial = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      return alert("Preencha todos os campos corretamente!");
    }
    const templatePrams = {
      from_name: name,
      message: message,
      email: email,
    };
    emailjs
      .send("service_9f0qa5w", "template_vl1c8ro", templatePrams, "IgRkcWeNYSXHW_Sfb")
      .then((response) => {
        console.log("Email enviado", response.status, response.text);
        setName("");
        setEmail("");
        setMessage("");
        window.alert("Sua mensagem foi enviada!")
      })
      .catch((err) => console.log("Erro: ", err));
  };

  return (
    <div className={Style.container}>
      <TextContent subTitle="Envie um email" />
      <form className={Style.form} onSubmit={sendEmial}>
        <input
          className={Style.input}
          type="text"
          placeholder="Insira seu Nome"
          onChange={(e) => setName(e.target.value)}
          required
          value={name}
        />
        <input
          className={Style.input}
          type="text"
          placeholder="Insira seu E-mail"
          onChange={(e) => setEmail(e.target.value)}
          required
          value={email}
        />
        <textarea
          className={Style.input}
          placeholder="Escrvea sua mensagem"
          onChange={(e) => setMessage(e.target.value)}
          required
          value={message}
          rows={8}
        ></textarea>
        <button className={Style.button} type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Forms;
