import { TiSocialLinkedin } from "react-icons/ti";
import { BsGithub } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

import DownIcon from "./assets/downIcon.png";
import Selfie from "./assets/selfie.png";
import AboutMeImgs from "./assets/aboutMeImgs.png";

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

const App = () => {
  return (
    <main className="">
      {/* Home Section */}
      <section className="px-[5%] bg-purple-mid-dark h-screen flex justify-center items-center">
        <div className="flex flex-col justify-start items-center">
          <h1 className="font-extralight text-white font-titles-jost text-[78px] uppercase tracking-widest">
            Lucas Bianchezzi Oliveira
          </h1>

          <div className="flex flex-row justify-between items-center h-[450px] w-full">
            <div className="flex flex-wrap items-center justify-center w-64">
              <h2 className="font-subtitles-roboto text-purple-mid text-4xl uppercase font-extrabold w-64 pb-4 drop-shadow-md shadow-black">
                Full-Stack developer
              </h2>

              <div className="flex flex-row justify-around w-48">
                <a href="" className="">
                  <BiLogoGmail className="w-[45px] h-[45px] p-[5px] bg-[#8991DC] rounded-full text-purple-mid-dark hover:shadow-long hover:shadow-purple-mid transition-all duration-200" />
                </a>

                <a href="" className="">
                  <BsGithub className="w-[45px] h-[45px] text-[#8991dc] rounded-full hover:shadow-long hover:shadow-purple-mid transition-all duration-200" />
                </a>

                <a href="" className="">
                  <TiSocialLinkedin className="w-[45px] h-[45px] p-[5px] bg-[#8991DC] rounded-full text-purple-mid-dark hover:shadow-long hover:shadow-purple-mid transition-all duration-200" />
                </a>
              </div>
            </div>

            <img src={Selfie} alt="" />

            <img
              className="absolute bottom-16 left-[50%] animate-bounce"
              src={DownIcon}
              alt=""
            />
          </div>
        </div>

        <FixedScrollBar />
        <img src="" alt="" />
      </section>

      {/* About Me Section */}
      <section className="px-[10%] py-40 flex flex-row flex-wrap max-xl:gap-32 justify-between items-center bg-purple-dark h-fit max-xl:flex-col">
        <h2 className="pb-20 font-medium text-white font-titles-kumbh-sans uppercase text-[53px] w-full max-xl:text-center">
          Um pouco sobre mim...
        </h2>

        <div className="w-[50%] max-xl:w-[90%]">
          <p className="font-paragraphes-koulen text-lg text-gray-light text-justify pr-14">
            Minha jornada no mundo da programação surgiu em 2020 durante a
            pandemia do covid-19. foi naquele momento aos 13 anos que tive o
            primeiro contato com a programação.
            <br />
            <br /> Desde então meu entusiasmo e a busca por novos aprendizados
            na área aumentou cada vez mais, inicialmente eu estudava por hobby,
            mas com o tempo decidi que esta deveria ser a minha carreira
            profissional e entrei de vez no tema, realizando diversos cursos
            online gratuitos e pagos, lendo e escrevendo documentações;
            acompanhando canais de aprendizagem como maccorati, philipe
            deschamps, balta.io e outros; realizando diversos{" "}
            <span className="highlighted-text">projetos mobile</span>,{" "}
            <span className="highlighted-text">web</span> e{" "}
            <span className="highlighted-text">bancos de dados completos</span>;
            explorando diversas ferramentas como{" "}
            <span className="highlighted-text">websocket</span>, automações com{" "}
            <span className="highlighted-text">webdriver</span>,{" "}
            <span className="highlighted-text">ml.net</span>,{" "}
            <span className="highlighted-text">signalR</span>, o atual defasado{" "}
            <span className="highlighted-text">xamarin</span>, entre outros.
            <br />
            <br /> Além disso, desde pequeno tenho realizado atividades físicas,
            já havendo participado de diversos campeonatos e realizado diversas
            conquistas em natação, futsal, judô e handebol. <br />
            Cheguei a realizar e ganhar medalha de bronze no OBA de 2018.
          </p>
        </div>

        <img className="w-[500px] max-wl:w[100%]" src={AboutMeImgs} alt="" />
      </section>

      {/* Knowledge Section */}
      <section className="px-[10%] h-fit pb-56 bg-purple-mid-dark">
        <h2 className="font-medium text-white font-titles-kumbh-sans text-right py-28 pb-44 uppercase text-[53px]">
          Conhecimento
        </h2>

        {/* All Cards */}
        <div className="flex flex-row flex-wrap justify-around w-full">
          {/* Card */}
          <article className="flex flex-row flex-wrap justify-start max-2xl:justify-center gap-[20px] h-fit w-[36%]">
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
          <article className="flex flex-row flex-wrap justify-between max-2xl:justify-center pt-7 gap-[20px] h-fit w-[36%]">
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
          <article className="flex flex-row flex-wrap justify-center gap-[20px] h-fit w-[36%]">
            <h3 className="font-titles-kumbh-sans font-medium text-4xl text-center uppercase w-full text-white pb-[30px]">
              Bancos de dados e tecnologias
            </h3>

            <img src={SsmsCardImg} className="w-[134px] h-[170px]" alt="" />
            <img src={MongodbCardImg} className="w-[134px] h-[170px]" alt="" />
          </article>

          {/* Card */}
          <article className="flex flex-row flex-wrap justify-between max-2xl:justify-center pt-32 gap-[20px] h-fit w-[36%]">
            <h3 className="font-titles-kumbh-sans font-medium text-4xl text-center uppercase w-full text-white pb-[30px]">
              versionamento e gestão
            </h3>

            <img src={GitCardImg} alt="" />
            <img src={FigmaCardImg} alt="" />
            <img src={TrelloCardImg} alt="" />
            <img src={AzureDevopsCardImg} alt="" />
          </article>

          {/* Card Metodologias e documentações */}
          <article className="flex flex-row flex-wrap justify-between gap-[20px] h-fit w-[40%]">
            <h3 className="font-titles-kumbh-sans font-medium text-4xl text-center uppercase w-full text-white pb-[30px]">
              Metodologias e documentações
            </h3>

            <p className="font-subtitles-roboto text-[25px] text-white text-opacity-75 py-[20px] w-full bg-[#393E46] text-center rounded-[16px] ">
              Metodologias Ágeis
            </p>
            <p className="font-subtitles-roboto text-[25px] text-white text-opacity-75 py-[20px] w-full bg-[#393E46] text-center rounded-[16px] ">
              Documentação de Software
            </p>
            <p className="font-subtitles-roboto text-[25px] text-white text-opacity-75 py-[20px] w-full bg-[#393E46] text-center rounded-[16px] ">
              Documentação de Requisitos
            </p>
            <p className="font-subtitles-roboto text-[25px] text-white text-opacity-75 py-[20px] w-full bg-[#393E46] text-center rounded-[16px] ">
              Modelagem de Banco de Dados (MER e DER)
            </p>
            <p className="font-subtitles-roboto text-[25px] text-white text-opacity-75 py-[20px] w-full bg-[#393E46] text-center rounded-[16px] ">
              Modelagem de Software (Diagramas UML)
            </p>
            <p className="font-subtitles-roboto text-[25px] text-white text-opacity-75 py-[20px] w-full bg-[#393E46] text-center rounded-[16px] ">
              Swagger
            </p>
          </article>

          {/* Card */}
          <article className="flex flex-row flex-wrap justify-between pt-36 gap-[20px] h-fit w-[36%]">
            <h3 className="font-titles-kumbh-sans font-medium text-4xl text-center uppercase w-full text-white pb-[30px]">
              Qualidade e experiência
            </h3>

            <p className="font-subtitles-roboto text-[27px] text-white text-opacity-75 py-[20px] w-[456px] bg-[#393E46] text-center rounded-[16px] ">
              Testes de Software
            </p>
            <p className="font-subtitles-roboto text-[27px] text-white text-opacity-75 py-[20px] w-[456px] bg-[#393E46] text-center rounded-[16px] ">
              Testes Unitários com xUnit e MOQ
            </p>
            <p className="font-subtitles-roboto text-[27px] text-white text-opacity-75 py-[20px] w-[456px] bg-[#393E46] text-center rounded-[16px] ">
              UX (experiência do usuário)
            </p>
            <p className="font-subtitles-roboto text-[27px] text-white text-opacity-75 py-[20px] w-[456px] bg-[#393E46] text-center rounded-[16px] ">
              UI (interface do usuário)
            </p>
          </article>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-[5%] h-screen bg-[#282A40] text-white uppercase text-right">
        <h2 className="font-titles-kumbh-sans font-medium text-5xl text-white text-right py-28 text-[53px]">
          Projetos
        </h2>

        <article className="flex items-center gap-11 h-[480px]">
          <img src={GamerTabletImg} alt="" />

          {/* Infos */}
          <div className="flex flex-col items-start mt-20 h-full w-[500px] text-left">
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
              <a href="">
                <BsGithub className="w-[45px] h-[45px] p-[3px] text-[#8991dc] rounded-full hover:shadow-long hover:shadow-purple-mid transition-all duration-200" />
              </a>

              <a href="">
                <FiExternalLink className="w-[45px] h-[45px] p-[3px] text-[#8991dc] hover:shadow-long rounded-lg hover:shadow-purple-mid transition-all duration-200" />
              </a>
            </div>
          </div>
        </article>

        <a href="">Outros Projetos</a>
      </section>

      <footer className="px-[5%] h-[345px] w-full bg-purple-dark">
        <div className="w-full h-fit pt-[100px] flex flex-col items-center justify-center">
          {/* Section Links */}
          <div className="flex justify-between w-[40%]">
            <a
              className="flex justify-center font-titles-kumbh-sans text-white w-fit p-2 hover:animate-pulse"
              href=""
            >
              <HiHome className="h-[24px] w-[24px] text-white mr-[12px]" />
              Home
            </a>

            <a
              className="flex justify-center font-titles-kumbh-sans text-white w-fit p-2 hover:animate-pulse"
              href=""
            >
              <MdPerson className="h-[26px] w-[26px] text-white mr-[12px]" />
              Sobre
            </a>

            <a
              className="flex justify-center font-titles-kumbh-sans text-white w-fit p-2 hover:animate-pulse"
              href=""
            >
              <PiBrain className="h-[24px] w-[24px] text-white mr-[12px]" />
              Conhecimento
            </a>

            <a
              className="flex justify-center font-titles-kumbh-sans text-white w-fit p-2 hover:animate-pulse"
              href=""
            >
              <HiOutlineLightBulb className="h-[24px] w-[24px] text-white mr-[12px]" />
              Projetos
            </a>
          </div>

          {/* Social Medias */}
          <div className="flex justify-between w-[180px] mt-20">
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

        <p className="h-[10%] font-titles-kumbh-sans text-right text-white bg-purple-dark">
          Terms of Service - Privacy Policy
        </p>
      </footer>
    </main>
  );
};

export default App;
