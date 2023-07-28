const TextContainer = ({
  children,
  label,
  type,
  placeholder,
  options,
  name,
  onChange,
}) => {
  return (
    <div>
      <label
        className="block text-gray-800 font-semibold text-[14px] mb-2"
        htmlFor={`${label}`}
      >
        {label}
      </label>
      <div className="relative">
        {type === "select" ? (
          <select
            id={`${label}`}
            onChange={onChange}
            name={name}
            className="appearance-none border border-gray-300 text-lg rounded-lg w-full p-4 text-gray-700 leading-tight focus:border-primary focus:shadow-outline"
          >
            {options.map((opt, index) => (
              <option key={index} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : (
          <>
            <input
              type={`${type}`}
              id={`${label}`}
              required
              onChange={onChange}
              name={name}
              className="appearance-none border border-gray-300 text-lg rounded-lg w-full p-4 text-gray-700 leading-tight focus:border-primary focus:shadow-outline"
              //   placeholder={`${placeholder}`}
            />
            <div>{children}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default TextContainer;
