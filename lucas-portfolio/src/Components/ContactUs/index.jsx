import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { InputLabel } from "../Inputs";

export const ContactUsSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1ez4n4g", "template_z5w250n", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="flex flex-row px-[10%] py-14 bg-purple-mid-dark min-h-96">
      <form
        className="flex flex-col justify-center w-[45%]"
        ref={form}
        onSubmit={sendEmail}
      >
        <h1 className="font-titles-kumbh-sans font-medium text-5xl text-white py-6">Contato</h1>
        
        <InputLabel
          labelTxt={"Name"}
          for_name={"user_name"}
          placeholder={"Insira seu nome..."}
        />

        <InputLabel
          labelTxt={"Email"}
          for_name={"user_email"}
          placeholder={"Insira seu email..."}
        />

        <InputLabel
          labelTxt={"Message"}
          for_name={"messsage"}
          placeholder={"Insira a mensagem do email..."}
        />
        
        <button className="
        bg-purple-mid text-black
         w-[80%] rounded-md p-3  
         uppercase font-titles-kumbh font-bold 
         shadow-lg
         hover:shadow-purple-mid hover:bg-purple-dark hover:text-purple-mid transition-all duration-300 ease-in-out" type="submit">Enviar</button>
        {/* <input type="submit" value="Send" /> */}
      </form>

      <p>
        Entre em contato comigo caso queira tirar alguma dúvida, conversar sobre
        tecnologia ou proposta!
      </p>
    </section>
  );
};
