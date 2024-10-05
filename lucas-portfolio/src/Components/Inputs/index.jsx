export const InputLabel = ({ for_name, labelTxt, placeholder, value, handleOnChange }) => {
  return (
    <>
      <label className="font-subtitles-roboto text-lg text-purple-mid" htmlFor={for_name}>{labelTxt}</label>
      <input
        className="bg-purple-dark rounded-md text-sm py-2 px-4 mb-5 text-beige font-subtitles-roboto w-[80%]"
        id={for_name}
        type="text"
        name={for_name}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
    </>
  );
};

export const TextAreaInputLabel = ({ for_name, labelTxt, placeholder, value, handleOnChange, inputStyle }) => {
  return (
    <>
      <label className="font-subtitles-roboto text-lg text-purple-mid" htmlFor={for_name}>{labelTxt}</label>
      <textarea
        className={`bg-purple-dark rounded-md text-sm py-2 px-4 mb-5 text-beige font-subtitles-roboto h-36 w-[80%] resize-none overflow-hidden ${inputStyle}`}
        id={for_name}
        type="text"
        name={for_name}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
      />
    </>
  );
};
