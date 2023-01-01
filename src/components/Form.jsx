import React from 'react';

const Form = ({ children, text }) => {
  return (
    <div className="w-full pt-4 px-4 pb-4  overflow-auto h-full !scrollbar-thin !scrollbar-track-transparent scrollbar-thumb-slate-400/30 scroll-smooth">
      <div className="w-full md:w-1/2 flex flex-col h-fit mb-20 overflow-hidden rounded-t-md dark:bg-gray-900 bg-slate-100 mx-auto my-2 shadow-sm dark:shadow-gray-500">
        <span className="block p-4 h-fit bg-slate-300 dark:bg-gray-600 overflow-hidden relative text-start">
          <h1 className="text-3xl relative z-[1] uppercase font-bold">{text}</h1>
          <p className=" relative z-[1] text-[14px]">Pastikan untuk memasukan data dengan teliti.</p>
          <span className="h-4 w-44  opacity-50 md:opacity-100 top-[1rem]  rounded-xl bg-white dark:bg-black absolute right-[-20px] block"></span>
          <span className="h-4 w-44 opacity-50 top-8 md:opacity-100 rounded-xl bg-pink-400 absolute right-[-30px] block"></span>
          <span className="h-4 w-44 opacity-50 top-[3rem] md:opacity-100 rounded-xl bg-white dark:bg-black absolute right-[-40px] block"></span>
        </span>
        <form className="w-full p-4 ">{children}</form>
      </div>
    </div>
  );
};

export default Form;
