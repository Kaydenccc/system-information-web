import React, { useEffect } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { TiEdit } from 'react-icons/ti';
import { dataBarangSupplier } from '../../dummy';

const TableBarangSuplier = () => {
  useEffect(() => {
    const currentElemt = document.querySelector('.client');
    const modal = document.querySelector('.modal');
    const getClientPositinX = (e) => {
      let widthh = currentElemt.offsetWidth;
      let x = e.pageX;
      let y = e.pageY;
      if (x < 85) {
        x = 85;
      }
      console.log('barang suplier', y);
      if (widthh > 300 && widthh < 490 && x > 280) {
        modal.style.right = `-30px`;
        modal.style.left = `auto`;
      } else {
        modal.style.right = `auto`;
        modal.style.left = `${x}px`;
      }
      modal.style.opacity = 1;
      modal.style.top = `${y}px`;
      modal.style.transition = 'none';
    };
    currentElemt.addEventListener('click', getClientPositinX);
    modal.addEventListener('mouseleave', () => {
      modal.style.opacity = 0;
    });
    return () => {
      currentElemt.removeEventListener('click', getClientPositinX);
      modal.removeEventListener('mouseleave', () => {
        modal.style.opacity = 0;
      });
    };
  }, []);
  return (
    <table className="border-collapse md:border-separate table-fixed md:table-auto w-full md:w-full">
      <thead>
        <tr>
          <th className="text-start border-b border-slate-300 dark:border-slate-500 md:pl-6 pb-2 hidden md:table-cell text-gray-800 dark:text-slate-300">No.</th>
          <th className="text-start border-b border-slate-300 dark:border-slate-500 pb-2 pl-6 text-gray-800 dark:text-slate-300">Barang</th>
          <th className="text-start border-b border-slate-300 dark:border-slate-500 pl-6 pb-2 text-gray-800 dark:text-slate-300">Suplier</th>
          <th className="text-start border-b border-slate-300 dark:border-slate-500 pl-6 pb-2 text-gray-800 dark:text-slate-300">Penerima</th>
          <th className="text-start border-b border-slate-300 dark:border-slate-500 pb-2 pl-6 text-gray-800 dark:text-slate-300 hidden md:table-cell">Jumlah</th>
          <th className="text-start border-b border-slate-300 dark:border-slate-500 pb-2 pl-2 md:pl-6 text-gray-800 dark:text-slate-300 ">Tanggal</th>
          <th className="text-center border-b border-slate-300 dark:border-slate-500 pb-2 hidden md:table-cell text-gray-800 dark:text-slate-300">Action</th>
        </tr>
      </thead>
      <tbody className="bg-slate-50 dark:bg-gray-800 client">
        {dataBarangSupplier.map((data, i) => (
          <tr key={i} className="cursor-pointer">
            <td className="border-b relative py-2 md:pl-6 hidden md:table-cell border-slate-300 dark:border-slate-600">{i + 1}</td>
            <td className="text-start border-b relative border-slate-300 dark:border-slate-600 pl-6 py-2">{data.alat}</td>
            <td className="border-b relative py-2 pl-6  border-slate-300 dark:border-slate-600">{data.name}</td>
            <td className="border-b relative py-2 pl-6  border-slate-300 dark:border-slate-600  ">{data.penerima}</td>
            <td className="border-b relative py-2 pl-6  border-slate-300 dark:border-slate-600 hidden md:table-cell">{data.jumlah}</td>
            <td className="border-b relative py-2 pl-2 md:pl-6  border-slate-300 dark:border-slate-600  ">{data.tanggal}</td>
            <td className="border-b relative py-2 hidden md:table-cell border-slate-300 dark:border-slate-600 text-center">
              <TiEdit className="text-blue-600 dark:text-white inline-block mr-1 text-[18px]" />
              <MdDeleteForever className="text-red-600 dark:text-white inline-block text-[18px]" />
            </td>
          </tr>
        ))}
        <tr className={`absolute cursor-pointer modal translate-y-[-50%] translate-x-[-50%] transition-all duration-300 md:hidden modal bg-gray-600 opacity-0 z-50 p-2 rounded-sm`}>
          <td className="flex gap-3 items-center ">
            <li className="flex flex-row items-center">
              <TiEdit className="text-white inline-table-cell text-[18px]" />
              <p className="text-blue-300">Edit</p>
            </li>
            <li className="flex flex-row items-center">
              <MdDeleteForever className="text-white inline-table-cell text-[18px]" />
              <p className="text-red-300">Delete</p>
            </li>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableBarangSuplier;
