import React from 'react';

const Button = ({ shadow, text, ...others }) => {
  return (
    <button {...others} className={`${shadow} p-[10px] shadow-sm bg-slate-200 hover:bg-slate-300 rounded-sm dark:hover:bg-gray-800  dark:bg-gray-700 w-full font-bold `}>
      {text}
    </button>
  );
};

export default Button;
