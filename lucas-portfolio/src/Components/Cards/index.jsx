import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

export const LeftCardProject = ({
  SiteImg,
  title,
  description,
  languages,
  tools,
  projectPattern,
  repositoryLink,
  websiteLink,
}) => {
  return (
    <article className="flex items-center justify-start gap-11 w-[90%] mb-24 max-xl:flex-wrap max-xl:justify-center max-xl:gap-0">
      <img src={SiteImg} alt="" />

      {/* Infos */}
      <div className="flex flex-col items-start h-full w-[500px] text-left">
        <h3 className="font-titles-jost text-[24px] uppercase tracking-widest">
          {title}
        </h3>
        <p className="font-paragraphes-koulen text-[16px] tracking-widest text-purple-light pb-[36px]">
          {description}
        </p>

        <h4 className="font-paragraphes-koulen text-[16px] tracking-widest text-white">
          Linguagens
        </h4>
        <p className="font-paragraphes-koulen text-[16px] tracking-widest text-purple-light pb-[36px]">
          {languages}
        </p>

        <h4 className="font-paragraphes-koulen text-[16px] tracking-widest text-white">
          Ferramentas
        </h4>
        <p className="font-paragraphes-koulen text-[16px] tracking-widest text-purple-light pb-[36px]">
          {tools}
        </p>

        <h4 className="font-paragraphes-koulen text-[16px] tracking-widest text-white">
          padrão de projeto
        </h4>
        <p className="font-paragraphes-koulen text-[16px] tracking-widest text-purple-light pb-[36px]">
          {projectPattern}
        </p>

        {/* Links úteis */}
        <div className="flex justify-between w-[100px] mt-[-25px]">
          <a target="_blank" href={repositoryLink}>
            <BsGithub className="w-[45px] h-[45px] p-[3px] text-[#8991dc] rounded-full hover:shadow-long hover:shadow-purple-mid transition-all duration-200" />
          </a>

          <a target="_blank" href={websiteLink}>
            <FiExternalLink className="w-[45px] h-[45px] p-[3px] text-[#8991dc] hover:shadow-long rounded-lg hover:shadow-purple-mid transition-all duration-200" />
          </a>
        </div>
      </div>
    </article>
  );
};

export const RightCardProject = ({
  SiteImg,
  title,
  description,
  languages,
  tools,
  projectPattern,
  repositoryLink,
  websiteLink,
}) => {
  return (
    <article className="flex items-end justify-end gap-11 h-fit w-[90%] mb-24 max-xl:flex-wrap-reverse max-xl:justify-center max-xl:gap-0">
      {/* Infos */}
      <div className="flex flex-col items-start mt-20 h-full w-[500px] text-left max-xl:m-0">
        <h3 className="font-titles-jost text-[24px] uppercase tracking-widest text-left">
          {title}
        </h3>
        <p className="font-paragraphes-koulen text-[16px] text-justify tracking-widest text-purple-light pb-[36px]">
          {description}
        </p>

        <h4 className="font-paragraphes-koulen text-[16px] tracking-widest text-white">
          Linguagens
        </h4>
        <p className="font-paragraphes-koulen text-[16px] tracking-widest text-purple-light pb-[36px]">
          {languages}
        </p>

        <h4 className="font-paragraphes-koulen text-[16px] tracking-widest text-white">
          Ferramentas
        </h4>
        <p className="font-paragraphes-koulen text-[16px] tracking-widest text-purple-light pb-[36px]">
          {tools}
        </p>

        <h4 className="font-paragraphes-koulen text-[16px] tracking-widest text-white">
          padrão de projeto
        </h4>
        <p className="font-paragraphes-koulen text-[16px] tracking-widest text-purple-light pb-[36px]">
          {projectPattern}
        </p>

        {/* Links úteis */}
        <div className="flex justify-between w-[100px] mt-[-25px]">
          <a target="_blank" href={repositoryLink}>
            <BsGithub className="w-[45px] h-[45px] p-[3px] text-[#8991dc] rounded-full hover:shadow-long hover:shadow-purple-mid transition-all duration-200" />
          </a>

          <a target="_blank" href={websiteLink}>
            <FiExternalLink className="w-[45px] h-[45px] p-[3px] text-[#8991dc] hover:shadow-long rounded-lg hover:shadow-purple-mid transition-all duration-200" />
          </a>
        </div>
      </div>

      <img src={SiteImg} alt="" />
    </article>
  );
};
