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
