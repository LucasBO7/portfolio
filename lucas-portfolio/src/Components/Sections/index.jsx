import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { TiSocialLinkedin } from "react-icons/ti";

import { FixedScrollBar } from "../FixedScrollBar";
import DownIcon from "../../assets/downIcon.png";
import Selfie from "../../assets/selfie.png";

import AboutMeImgs from "../../assets/aboutMeImgs.png";

export const HomeSection = () => {
    return (
        <section
            id="presentation"
            className="px-[5%] bg-purple-mid-dark h-screen flex justify-center items-center z-10"
        >
            <div className="flex flex-col justify-start items-center">
                <h1 className="font-extralight text-white font-titles-jost text-[78px] z-10 uppercase tracking-widest">
                    Lucas Bianchezzi Oliveira
                </h1>

                <div className="flex flex-row justify-between items-center z-10 h-[450px] w-full">
                    <div className="flex flex-wrap items-center justify-center w-64">
                        <h2 className="font-subtitles-roboto text-purple-mid text-center text-4xl uppercase font-extrabold w-64 pb-4 drop-shadow-md shadow-black">
                            Full-Stack developer
                        </h2>

                        <div className="flex flex-row justify-around w-48">
                            <a
                                target="_blank"
                                href="mailto:lucasbianchezzi700@gmail.com"
                                className=""
                            >
                                <BiLogoGmail className="w-[45px] h-[45px] p-[5px] bg-[#8991DC] rounded-full text-purple-mid-dark hover:shadow-long hover:shadow-purple-mid transition-all duration-200" />
                            </a>

                            <a
                                target="_blank"
                                href="https://github.com/LucasBO7"
                                className=""
                            >
                                <BsGithub className="w-[45px] h-[45px] text-[#8991dc] rounded-full hover:shadow-long hover:shadow-purple-mid transition-all duration-200" />
                            </a>

                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/lucasb-oliveira/"
                                className=""
                            >
                                <TiSocialLinkedin className="w-[45px] h-[45px] p-[5px] bg-[#8991DC] rounded-full text-purple-mid-dark hover:shadow-long hover:shadow-purple-mid transition-all duration-200" />
                            </a>
                        </div>
                    </div>

                    <img className="z-10" src={Selfie} alt="" />

                    <img
                        className="absolute bottom-16 left-[50%] animate-bounce z-10"
                        src={DownIcon}
                        alt=""
                    />
                </div>
            </div>

            <FixedScrollBar />
            <img src="" alt="" />
        </section>
    );
}


export const AboutMeSection = () => {
    return (
        <section
            id="aboutme"
            className="px-[10%] py-40 z-20 flex flex-row flex-wrap max-xl:gap-32 justify-between items-center bg-purple-dark h-fit max-xl:flex-col"
        >
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
    );
}