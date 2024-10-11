import { TiSocialLinkedin } from "react-icons/ti";
import { BsGithub } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

import CsharpCardImg from "./assets/csharp.png";
import JsCardImg from "./assets/js.png";
import SqlCardImg from "./assets/sql.png";
import HtmlCardImg from "./assets/html.png";
import CssCardImg from "./assets/css.png";

import DotnetCardImg from "./assets/dotnet.png";
import EfCardImg from "./assets/ef.png";
import JwtCardImg from "./assets/jwt.png";
import ReactCardImg from "./assets/react.png";
import TailwindCardImg from "./assets/tailwindcss.png";
import NodeCardImg from "./assets/nodejs.png";
import JsonServerCardImg from "./assets/jsonserver.png";

import SsmsCardImg from "./assets/ssms.png";
import MongodbCardImg from "./assets/mongodb.png";

import GitCardImg from "./assets/git.png";
import FigmaCardImg from "./assets/figma.png";
import TrelloCardImg from "./assets/trello.png";
import AzureDevopsCardImg from "./assets/azuredevops.png";

import GamerTabletImg from "./assets/project/GamerTabletProject.png";
// import TabletImg from "./assets/project/tablet.png";
// import ProjectGamerImg from "./assets/project/projectgamer.png";

import { FiExternalLink } from "react-icons/fi";
import { HiHome } from "react-icons/hi2";
import { MdPerson } from "react-icons/md";
import { PiBrain } from "react-icons/pi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FixedScrollBar } from "./Components/FixedScrollBar";
import BackgroundLights from "./assets/homebackground.png";
import RedBackgroundLights from "./assets/redbkgroundlight.png";
import ProjectBackgroundLights from "./assets/projectlights.png";

import { ContactUsSection } from "./Components/ContactUs";
import { AboutMeSection, HomeSection } from "./Components/Sections";
import { Paragraph, SndParagraph } from "./Components/Texts";

const App = () => {
  return (
    <main className="">
      {/* Home Section */}
      <HomeSection />

      {/* About Me Section */}
      <AboutMeSection />

      {/* Knowledge Section */}
      <section
        id="knowledge"
        className="px-[10%] h-fit pb-56 bg-purple-mid-dark z-10 bg-[url('/src/assets/redbkgroundlight.png')] bg-no-repeat bg-auto bg-[right_top_-20rem]"
      >
        <h2 className="font-medium text-white font-titles-kumbh-sans text-right py-28 pb-44 uppercase text-[53px] max-sm:text-center max-sm:text-[41px]">
          Conhecimento
        </h2>

        {/* All Cards */}
        <div className="flex flex-row flex-wrap max-sm:flex-col justify-around w-full max-sm:gap-24">
          {/* Card */}
          <article className="flex flex-row flex-wrap justify-start max-2xl:justify-center gap-[20px] h-fit w-[36%] mb-28 max-sm:w-full max-sm:m-0">
            <h3 className="font-titles-kumbh-sans font-medium text-4xl text-center uppercase w-full text-white pb-[30px]">
              Tecnologias
            </h3>

            <img src={CsharpCardImg} className="w-[134px] h-[170px]" alt="" />
            <img src={JsCardImg} className="w-[134px] h-[170px]" alt="" />
            <img src={SqlCardImg} className="w-[134px] h-[170px]" alt="" />
            <img src={HtmlCardImg} alt="" />
            <img src={CssCardImg} alt="" />
          </article>

          {/* Card */}
          <article className="flex flex-row flex-wrap justify-between max-2xl:justify-center pt-7 gap-[20px] h-fit w-[40%] max-sm:w-full">
            <h3 className="font-titles-kumbh-sans font-medium text-4xl text-center uppercase w-full text-white pb-[30px]">
              Frameworks e Libs
            </h3>

            <img src={DotnetCardImg} alt="" />
            <img src={EfCardImg} alt="" />
            <img src={JwtCardImg} alt="" />
            <img src={ReactCardImg} alt="" />
            <img src={TailwindCardImg} alt="" />
            <img src={NodeCardImg} alt="" />
            <img src={JsonServerCardImg} alt="" />
          </article>

          {/* Card */}
          <article className="flex flex-row flex-wrap justify-center gap-[20px] h-fit w-[36%] max-sm:w-full">
            <h3 className="font-titles-kumbh-sans font-medium text-4xl text-center uppercase w-full text-white pb-[30px]">
              Bancos de dados e tecnologias
            </h3>

            <img src={SsmsCardImg} className="w-[134px] h-[170px]" alt="" />
            <img src={MongodbCardImg} className="w-[134px] h-[170px]" alt="" />
          </article>

          {/* Card */}
          <article className="flex flex-row flex-wrap justify-between max-2xl:justify-center pt-32 gap-[20px] h-fit w-[36%] max-sm:w-full max-sm:p-0 max-sm:pb-3">
            <h3 className="font-titles-kumbh-sans font-medium text-4xl text-center uppercase w-full text-white pb-[30px]">
              versionamento e gestão
            </h3>

            <img src={GitCardImg} alt="" />
            <img src={FigmaCardImg} alt="" />
            <img src={TrelloCardImg} alt="" />
            <img src={AzureDevopsCardImg} alt="" />
          </article>

          {/* Card Metodologias e documentações */}
          <article className="flex flex-row flex-wrap justify-between gap-[20px] h-fit w-[40%] max-sm:w-full">
            <h3 className="font-titles-kumbh-sans font-medium text-4xl text-center uppercase w-full text-white pb-[30px]">
              Metodologias e documentações
            </h3>

            <Paragraph children={"SCRUM"} />
            <Paragraph children={"Metodologias Ágeis"} />
            <Paragraph children={"Documentação de Software"} />
            <Paragraph children={"Documentação de Requisitos"} />
            <Paragraph children={"Modelagem de Banco de Dados (MER e DER)"} />
            <Paragraph children={"Modelagem de Software (Diagramas UML)"} />
            <Paragraph children={"Swagger"} />
          </article>

          {/* Card */}
          <article className="flex flex-row flex-wrap justify-between pt-36 gap-[20px] h-fit w-[36%] max-sm:w-full">
            <h3 className="font-titles-kumbh-sans font-medium text-4xl text-center uppercase w-full text-white pb-[30px]">
              Qualidade e experiência
            </h3>

            <SndParagraph children={"Testes de Software"} />
            <SndParagraph children={"Testes Unitários com xUnit e MOQ"} />
            <SndParagraph children={"UX (experiência do usuário)"} />
            <SndParagraph children={"UI (interface do usuário)"} />
          </article>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="flex flex-col items-center justify-center px-[5%] py-7 pb-20 h-fit bg-[#282A40] text-white uppercase text-right bg-[url('/src/assets/projectlights.png')] bg-no-repeat bg-cover bg-[left_top_-30rem] max-lg:bg-[left_top_-45rem]"
      >
        <h2 className="font-titles-kumbh-sans font-medium text-5xl text-white text-right w-[89%] uppercase py-28 text-[53px] max-lg:text-center max-sm:text-[41px]">
          Projetos
        </h2>

        {/* Projeto 1 */}
        <article className="flex items-center justify-start gap-11 w-[90%] mb-24 max-xl:flex-wrap max-xl:justify-center max-xl:gap-0">
          <img src={GamerTabletImg} alt="" />

          {/* Infos */}
          <div className="flex flex-col items-start mt-20 h-full w-[500px] text-left max-xl:m-0">
            <h3 className="font-titles-jost text-[24px] uppercase tracking-widest">
              Projeto Gamer
            </h3>
            <p className="font-paragraphes-koulen text-[16px] tracking-widest text-purple-light pb-[36px]">
              Projeto de gerenciamento de equipes e jogadores (participantes das
              equipes )
            </p>

            <h4 className="font-paragraphes-koulen text-[16px] tracking-widest text-white">
              Linguagens
            </h4>
            <p className="font-paragraphes-koulen text-[16px] tracking-widest text-purple-light pb-[36px]">
              C# SQL CSS HTML JS
            </p>

            <h4 className="font-paragraphes-koulen text-[16px] tracking-widest text-white">
              padrão de projeto
            </h4>
            <p className="font-paragraphes-koulen text-[16px] tracking-widest text-purple-light pb-[36px]">
              asp.net core mvc + web.api restfull
            </p>

            {/* Links úteis */}
            <div className="flex justify-between w-[100px] mt-[-25px]">
              <a
                target="_blank"
                href="https://github.com/LucasBO7/senai-curso-repos/tree/main/Back-end-2/Projeto_Gamer_mvc"
              >
                <BsGithub className="w-[45px] h-[45px] p-[3px] text-[#8991dc] rounded-full hover:shadow-long hover:shadow-purple-mid transition-all duration-200" />
              </a>

              <a target="_blank" href="">
                <FiExternalLink className="w-[45px] h-[45px] p-[3px] text-[#8991dc] hover:shadow-long rounded-lg hover:shadow-purple-mid transition-all duration-200" />
              </a>
            </div>
          </div>
        </article>

        {/* Projeto 2 */}
        <article className="flex items-end justify-end gap-11 h-fit w-[90%] mb-24 max-xl:flex-wrap-reverse max-xl:justify-center max-xl:gap-0">
          {/* Infos */}
          <div className="flex flex-col items-start mt-20 h-full w-[500px] text-left max-xl:m-0">
            <h3 className="font-titles-jost text-[24px] uppercase tracking-widest text-left">
              Projeto Gamer
            </h3>
            <p className="font-paragraphes-koulen text-[16px] text-justify tracking-widest text-purple-light pb-[36px]">
              Projeto de gerenciamento de equipes e jogadores (participantes das
              equipes)
            </p>

            <h4 className="font-paragraphes-koulen text-[16px] tracking-widest text-white">
              Linguagens
            </h4>
            <p className="font-paragraphes-koulen text-[16px] tracking-widest text-purple-light pb-[36px]">
              C# SQL CSS HTML JS
            </p>

            <h4 className="font-paragraphes-koulen text-[16px] tracking-widest text-white">
              padrão de projeto
            </h4>
            <p className="font-paragraphes-koulen text-[16px] tracking-widest text-purple-light pb-[36px]">
              asp.net core mvc + web.api restfull
            </p>

            {/* Links úteis */}
            <div className="flex justify-between w-[100px] mt-[-25px]">
              <a href="">
                <BsGithub className="w-[45px] h-[45px] p-[3px] text-[#8991dc] rounded-full hover:shadow-long hover:shadow-purple-mid transition-all duration-200" />
              </a>

              <a href="">
                <FiExternalLink className="w-[45px] h-[45px] p-[3px] text-[#8991dc] hover:shadow-long rounded-lg hover:shadow-purple-mid transition-all duration-200" />
              </a>
            </div>
          </div>

          <img src={GamerTabletImg} alt="" />
        </article>

        <a
          target="_blank"
          className="bg-[#1C1D2B] p-5 rounded-xl hover:bg-[#191A26] transition-all duration-300"
          href="https://github.com/LucasBO7?tab=repositories"
        >
          Outros Projetos
        </a>
      </section>

      <ContactUsSection />

      <footer className="px-[5%] h-[345px] w-full bg-purple-dark">
        <div className="w-full h-fit pt-[100px] flex flex-col items-center justify-center max-sm:flex-row max-sm:justify-center max-sm:pt-20">
          {/* Section Links */}
          <div className="flex justify-between w-[40%] max-sm:flex-col">
            <a
              className="flex justify-center font-titles-kumbh-sans text-white w-fit p-2 hover:animate-pulse"
              href="#presentation"
            >
              <HiHome className="h-[24px] w-[24px] text-white mr-[12px]" />
              Home
            </a>

            <a
              className="flex justify-center font-titles-kumbh-sans text-white w-fit p-2 hover:animate-pulse"
              href="#aboutme"
            >
              <MdPerson className="h-[26px] w-[26px] text-white mr-[12px]" />
              Sobre
            </a>

            <a
              className="flex justify-center font-titles-kumbh-sans text-white w-fit p-2 hover:animate-pulse"
              href="#knowledge"
            >
              <PiBrain className="h-[24px] w-[24px] text-white mr-[12px]" />
              Conhecimento
            </a>

            <a
              className="flex justify-center font-titles-kumbh-sans text-white w-fit p-2 hover:animate-pulse"
              href="#projects"
            >
              <HiOutlineLightBulb className="h-[24px] w-[24px] text-white mr-[12px]" />
              Projetos
            </a>
          </div>

          {/* Social Medias */}
          <div className="flex justify-between w-[180px] mt-20 max-sm:mt-0">
            <a href="" className="">
              <BiLogoGmail className="w-[45px] h-[45px] p-[5px] bg-gray-dark rounded-full text-gray-light hover:shadow-long hover:shadow-text-gray-light transition-all duration-200" />
            </a>

            <a href="" className="">
              <BsGithub className="w-[45px] h-[45px] text-gray-dark bg-gray-light rounded-full hover:shadow-long hover:shadow-text-gray-light transition-all duration-200" />
            </a>

            <a href="" className="">
              <TiSocialLinkedin className="w-[45px] h-[45px] p-[5px] bg-gray-dark rounded-full text-gray-light hover:shadow-long hover:shadow-text-gray-light transition-all duration-200" />
            </a>
          </div>
        </div>

        <p className="h-[10%] font-titles-kumbh-sans text-right text-white bg-purple-dark max-sm:text-center mt-10">
          Terms of Service - Privacy Policy
        </p>
      </footer>
    </main>
  );
};

export default App;
