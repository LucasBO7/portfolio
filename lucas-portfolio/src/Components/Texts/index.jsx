export const Paragraph = ({ children }) => {
  return (
    <p className="font-subtitles-roboto text-[25px] text-white text-opacity-75 py-[20px] w-full bg-[#393E46] text-center rounded-[16px] px-4">
      {children}
    </p>
  );
};

export const SndParagraph = ({ children }) => {
  return (
    <p className="font-subtitles-roboto text-[27px] text-white text-opacity-75 py-[20px] w-[456px] bg-[#393E46] text-center rounded-[16px] px-4">
      {children}
    </p>
  );
};
