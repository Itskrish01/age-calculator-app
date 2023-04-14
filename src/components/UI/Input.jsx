import React from "react";

const Input = ({ title, placeholder, onChange, value, name, error }) => {
  return (
    <div className="relative md:w-1/3 md:mb-0 mx-1">
      <label
        className={`block uppercase tracking-[5px]  text-xs font-bold mb-2 ${
          error ? "text-red-500" : "text-gray-700"
        }`}
        for="grid-city"
      >
        {title}
      </label>
      <input
        className={`appearance-none block text-2xl font-bold w-24 sm:w-28 rounded-lg placeholder:sm:text-2xl placeholder:font-bold text-gray-700 border py-3 px-4 leading-tight focus:outline-none ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        type="text"
        onChange={onChange}
        name={name}
        value={value}
        placeholder={placeholder}
      />
      <span
        className={`text-xs -bottom-2 transition-all ${
          error ? "translate-y-3 opacity-1" : "translate-y-0 opacity-0"
        } duration-300 absolute italic text-red-500`}
      >
        {error}
      </span>
    </div>
  );
};

export default Input;
