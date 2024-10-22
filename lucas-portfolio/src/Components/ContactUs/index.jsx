import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { InputLabel, TextAreaInputLabel } from "../Inputs";
import ContactImg from "../../assets/contact.png";

export const ContactUsSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_1ez4n4g", "template_hpmaile", form.current, {
        publicKey: "JJsEqor9-Y-KKBNoe",
      })
      .then(
        () => {
          alert("Mensagem enviada com sucesso!");
        },
        (error) => {
          alert("Falha ao enviar mensagem!");
        }
      );
  };

  return (
    <section className="flex flex-row flex-wrap px-[10%] py-14 bg-purple-mid-dark min-h-96 max-sm:flex-col max-sm:pb-20">
      <form
        className="flex flex-col justify-center w-[45%] max-sm:w-full"
        ref={form}
        onSubmit={sendEmail}
      >
        <h1 className="font-titles-kumbh-sans font-medium text-5xl text-white py-6">
          Contato
        </h1>

        <InputLabel
          labelTxt={"Name"}
          for_name={"user_name"}
          placeholder={"Insira seu nome..."}
          style={"max-sm:w-full"}
        />

        <InputLabel
          labelTxt={"Email"}
          for_name={"user_email"}
          placeholder={"Insira seu email..."}
          style={"max-sm:w-full"}
        />

        <TextAreaInputLabel
          labelTxt={"Message"}
          for_name={"message"}
          placeholder={"Insira a mensagem do email..."}
          inputStyle={"h-fit max-sm:w-full"}
          style={"w-full"}
        />

        <button
          className="
        bg-purple-mid text-black
         w-[80%] rounded-md p-3  
         uppercase font-titles-kumbh font-bold 
         shadow-lg
         hover:shadow-purple-mid hover:bg-purple-dark hover:text-purple-mid transition-all duration-300 ease-in-out max-sm:w-full"
          type="submit"
        >
          Enviar
        </button>
        {/* <input type="submit" value="Send" /> */}
      </form>

      <div className="w-[45%] py-6 flex flex-col items-center justify-center gap-12 border-l-2 border-purple-mid pl-14 max-sm:w-full max-sm:border-none max-sm:p-0 max-sm:mt-20">
        <p className="font-titles-jost text-2xl text-left text-purple-mid w-full">
          Entre em contato comigo caso queira tirar alguma dúvida, conversar
          sobre tecnologia ou o que for!
        </p>

        <img className="h-48" src={ContactImg} alt="Ícone de contato" />
      </div>
    </section>
  );
};
