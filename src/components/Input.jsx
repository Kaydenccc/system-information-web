import React from 'react';

const Input = ({ label, textLabel, type, placeholder, color, ...rest }) => {
  return (
    <div className="flex flex-col text-start space-y-1 my-2">
      <label className={`font-medium capitalize cursor-pointer ${color}`} htmlFor={label}>
        {textLabel}
      </label>
      <input {...rest} className={`p-[10px] placeholder:text-base rounded-sm dark:bg-gray-700 bg-white outline-slite-300`} type={type} id={label} placeholder={placeholder} />
    </div>
  );
};

export default Input;
