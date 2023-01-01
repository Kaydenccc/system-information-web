import React from 'react';
import TableAlat from '../../components/Tables/TableAlat';
import { GoDiffAdded } from 'react-icons/go';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Alat = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full max-h-full md:h-full flex flex-col flex-1 p-4 md:p-6 !pb-[92px] gap-8 overflow-y-auto !scrollbar-thin !scrollbar-track-transparent scrollbar-thumb-slate-400/30 scroll-smooth ">
      <div className="text-start">
        <h1 className="text-4xl md:text-5xl h-[43px] md:h-[55px] font-bold bg-gradient-to-br from-gray-300 via-gray-800 dark:via-gray-400 to-gray-800 text-transparent bg-clip-text">
          Barang dan Alat<span className="text-[#23d36c] text-3xl md:text-4xl">.</span>
        </h1>
        <p className="text-gray-800 dark:text-slate-400">Temukan barang dan alat yang kalian mau.</p>
      </div>
      <div className="text-start space-y-4">
        <button
          onClick={() => navigate('/tambah-alat')}
          className=" flex gap-1 items-center px-4 bg-slate-100 dark:bg-gray-800 rounded-md text-gray-900 dark:text-gray-400 hover:text-gray-300 shadow-sm shadow-gray-500 hover:bg-gray-700  font-semibold"
        >
          <GoDiffAdded />
          Tambah Alat
        </button>
        <div className="bg-slate-100 dark:bg-gray-900 border-slate-300 dark:border-slate-600 border py-8  rounded-lg overflow-hidden">
          <TableAlat />
          <div className="flex justify-between items-center px-4 pt-4 md:px-6">
            <span className="inline-block">Page 1 of 100</span>

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

export default Alat;
