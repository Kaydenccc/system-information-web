import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { GoDiffAdded } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import TableGuru from '../../components/Tables/TableGuru';

const Guru = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-h-full md:h-full flex flex-col flex-1 p-4 md:p-6 !pb-[92px] gap-8 overflow-y-auto !scrollbar-thin !scrollbar-track-transparent scrollbar-thumb-slate-400/30 scroll-smooth ">
      <div className="text-start">
        <h1 className="text-4xl md:text-5xl h-[43px] md:h-[55px] font-bold bg-gradient-to-br from-gray-300 via-gray-800 dark:via-gray-400 to-gray-800 text-transparent bg-clip-text">
          Data Guru<span className="text-[#be23d3] text-3xl md:text-4xl">.</span>
        </h1>
        <p className="text-gray-800 dark:text-slate-400">Temukan data guru yang kalian inginkan.</p>
      </div>
      <div className="text-start space-y-4">
        <button
          onClick={() => navigate('/tambah-guru')}
          className=" flex gap-1 items-center px-4 bg-slate-100 dark:bg-gray-800  rounded-md text-gray-900 dark:text-gray-400 hover:text-gray-300 shadow-sm shadow-gray-500 hover:bg-gray-700  font-semibold"
        >
          <GoDiffAdded />
          Tambah Guru
        </button>
        <div className="bg-slate-100 dark:bg-gray-900 border-slate-300 dark:border-slate-600 border py-8  rounded-lg overflow-hidden">
          <TableGuru />
          <div className="flex justify-between items-center px-4 pt-4 md:px-6">
            <span className="inline-block">Page 100 of 100</span>

            <div className="bg-white dark:bg-gray-800 h-auto flex rounded-sm">
              <button className="p-2 dark:active:bg-gray-800 active:bg-slate-50 bg-slate-200 dark:bg-black">
                <FaChevronLeft className="font-bold" />
              </button>
              <span className="mx-2 p-2 text-black dark:text-white">100</span>
              <button className="dark:active:bg-gray-800 active:bg-slate-50 bg-slate-200 dark:bg-black p-2">
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guru;
