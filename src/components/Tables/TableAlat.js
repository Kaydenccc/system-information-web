import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { TiEdit } from 'react-icons/ti';
import { dataalat } from '../../dummy';
const TableAlat = () => {
  return (
    <table className="md:table-auto border-collapse md:border-separate table-fixed w-full  md:w-full">
      <thead>
        <tr>
          <th className="text-start border-b border-slate-300 dark:border-slate-500 md:pl-6 pb-2 hidden md:table-cell text-gray-800 dark:text-slate-300">No.</th>
          <th className="text-start border-b border-slate-300 dark:border-slate-500 pl-6 pb-2 text-gray-800 dark:text-slate-300">Nama</th>
          <th className="text-start border-b border-slate-300 dark:border-slate-500 pb-2 md:pl-6 hidden md:table-cell text-gray-800 dark:text-slate-300">Jumlah</th>
          <th className="text-center border-b border-slate-300 dark:border-slate-500 md:pl-6 md:text-start pb-2 text-gray-800 dark:text-slate-300">Kondisi</th>
          <th className="text-center border-b border-slate-300 dark:border-slate-500 pb-2 text-gray-800 dark:text-slate-300">Status</th>
          <th className="text-start border-b border-slate-300 dark:border-slate-500 md:pl-6 pb-2 hidden md:table-cell text-gray-800 dark:text-slate-300">Tgl. Masuk</th>
          <th className="text-center border-b border-slate-300 dark:border-slate-500 pb-2 text-gray-800 dark:text-slate-300">Action</th>
        </tr>
      </thead>
      <tbody className="bg-slate-50 dark:bg-gray-800">
        {dataalat.map((alat, i) => (
          <tr key={i}>
            <td className="border-b py-2 md:pl-6 hidden md:table-cell border-slate-300 dark:border-slate-600">{i + 1}</td>
            <td className="border-b py-2 pl-6  border-slate-300 dark:border-slate-600">{alat.name}</td>
            <td className="text-start border-b border-slate-300 dark:border-slate-600 md:pl-6 pb-2 hidden md:table-cell">{alat.jumlah}</td>
            <td
              className={`border-b text-center md:text-start py-2 md:md:pl-6 md:pl-0 border-slate-300 dark:border-slate-600 ${
                alat.kondisi === 'Baik' ? 'font-bold dark:font-normal text-green-500 dark:text-green-300' : 'font-bold dark:font-normal text-red-500 dark:text-red-300'
              }`}
            >
              {alat.kondisi}
            </td>
            <td className="border-b py-2 border-slate-300 dark:border-slate-600 text-center">
              <span className={` px-[10px] py-[2px] font-medium rounded-full ${alat.status === 'Ada' ? 'text-green-700 bg-green-300' : 'text-red-700 bg-red-300'}`}>{alat.status}</span>
            </td>
            <td className="border-b py-2 md:pl-6  border-slate-300 dark:border-slate-600 hidden md:table-cell">{alat.tanggal}</td>
            <td className="border-b py-2 border-slate-300 dark:border-slate-600 text-center">
              <TiEdit className="text-blue-600 dark:text-white inline-block mr-1 text-[18px]" />
              <MdDeleteForever className="text-red-600 dark:text-white inline-block text-[18px]" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableAlat;
