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
            <div>
              <h2 className="font-subtitles-roboto text-purple-mid text-4xl uppercase font-extrabold w-64">
                Full-Stack developer
              </h2>
              <div>
                <p>a</p>
                <p>a</p>
                <p>a</p>
              </div>
            </div>

            <img src="" alt="" />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="px-[5%] flex flex-row justify-between items-center bg-purple-dark h-screen">
        <div className=" w-[40%]">
          <h2 className="pb-20 font-extralight text-white font-titles-kumbh-sans uppercase text-[53px]">
            Um pouco sobre mim...
          </h2>

          <p className="font-paragraphes-koulen text-xl text-gray-light">
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

        <img src="" alt="" />
      </section>

      {/* Knowledge Section */}
      <section className="px-[5%] h-screen bg-purple-mid-dark">
        <h2>Conhecimento</h2>

        <div className="w-[76%]">
          <article className="flex flex-row flex-wrap w-[32%]">
            <h3 className="font-titles-kumbh-sans font-medium text-4xl uppercase text-white">
              Tecnologias
            </h3>

            <img src="" alt="" />
          </article>

          <article className="flex flex-row flex-wrap w-[32%]">
            <h3 className="font-titles-kumbh-sans font-medium text-4xl uppercase text-white">
              Frameworks e Libs
            </h3>

            <img src="" alt="" />
          </article>
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-[5%] h-screen bg-[#282A40] text-white uppercase text-right">
        <h2 className="font-titles-kumbh-sans font-medium text-5xl">
          Projetos
        </h2>

        <article>
          <img src="" alt="" />

          {/* Infos */}
          <div>
            <h3>Projeto Gamer</h3>
            <p></p>

            <h4>Linguagens</h4>
            <p></p>

            <h4>Padrão de projeto</h4>
            <p></p>

            {/* Links úteis */}
            <div>
              <a href="">
                <img src="" alt="" />
              </a>

              <a href="">
                <img src="" alt="" />
              </a>
            </div>
          </div>
        </article>

        <a href="">Outros Projetos</a>
      </section>

      <footer>
        <div>
          <a href=""><img src="" alt="" />Home</a>
          <a href=""><img src="" alt="" />Sobre</a>
          <a href=""><img src="" alt="" />Conhecimento</a>
          <a href=""><img src="" alt="" />Projetos</a>
        </div>

        <div>
          <a href="">
            <img src="" alt="" />
          </a>

          <a href="">
            <img src="" alt="" />
          </a>

          <a href="">
            <img src="" alt="" />
          </a>

          <a href="">
            <img src="" alt="" />
          </a>
        </div>

        <p>Terms of Service - Privacy Policy</p>
      </footer>
    </main>
  );
};

export default App;
