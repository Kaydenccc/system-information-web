import React, { useEffect } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { TiEdit } from 'react-icons/ti';
import { dataPengajuan } from '../../dummy';

const TablePengajuan = () => {
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
      if (widthh > 300 && widthh < 490 && x > 280) {
        modal.style.right = `-30px`;
        modal.style.left = `auto`;
      } else {
        modal.style.right = `auto`;
        modal.style.left = `${x}px`;
      }
      if (y > 600) {
        y = 667;
      }
      modal.style.opacity = 1;
      modal.style.top = `${y}px`;
      console.log(x);
      console.log(widthh);
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
          <th className="text-start border-b border-slate-300 dark:border-slate-500 pl-6 pb-2 text-gray-800 dark:text-slate-300">Nama</th>
          <th className="text-center md:text-start border-b border-slate-300 dark:border-slate-500 pb-2 md:pl-6 text-gray-800 dark:text-slate-300">Jumlah</th>
          <th className="text-end border-b border-slate-300 dark:border-slate-500 pr-6 md:pr-0 md:pl-6 md:text-start pb-2 hidden md:table-cell text-gray-800 dark:text-slate-300">Pengaju</th>
          <th className="text-end md:text-start border-b border-slate-300 dark:border-slate-500 md:pl-6 pb-2 hidden md:table-cell text-gray-800 dark:text-slate-300 pr-6 md:pr-0">Keterangan</th>
          <th className="text-start pl-6 border-b border-slate-300 dark:border-slate-500 pb-2 text-gray-800 dark:text-slate-300">Tanggal</th>
          <th className="text-center border-b border-slate-300 dark:border-slate-500 pb-2 text-gray-800 dark:text-slate-300">Status</th>
          <th className="text-center border-b border-slate-300 dark:border-slate-500 pb-2 hidden md:table-cell text-gray-800 dark:text-slate-300">Action</th>
        </tr>
      </thead>
      <tbody className="bg-slate-50 dark:bg-gray-800 client">
        {dataPengajuan.map((data, i) => (
          <tr key={i} className="cursor-pointer">
            <td className="border-b relative py-2 md:pl-6 hidden md:table-cell border-slate-300 dark:border-slate-600">{i + 1}</td>
            <td className="border-b relative py-2 pl-6  border-slate-300 dark:border-slate-600">{data.name}</td>
            <td className="text-center md:text-start border-b relative border-slate-300 dark:border-slate-600 md:pl-6 py-2">{data.jumlah}</td>
            <td className="text-end hidden md:table-cell md:text-start border-b relative border-slate-300 dark:border-slate-600 md:pl-6 pr-6 md:pr-0 py-2">{data.pengaju}</td>
            <td className="text-end md:text-start border-b relative border-slate-300 dark:border-slate-600 md:pl-6 pr-6 hidden md:table-cell md:pr-0 py-2">{data.keterangan}</td>
            <td className="text-start pl-6 border-b relative border-slate-300 dark:border-slate-600 py-2">{data.tanggal}</td>
            <td className={`text-center border-b relative border-slate-300 dark:border-slate-600 py-2 `}>
              <span
                className={`px-[10px] py-[2px] font-medium rounded-full ${data.status === 'Diproses' && 'bg-yellow-300 text-yellow-800'} ${data.status === 'Ditolak' && 'bg-red-300 text-red-800'} ${
                  data.status === 'Diterima' && 'bg-green-300 text-green-800'
                }`}
              >
                {data.status}
              </span>
            </td>
            <td className="border-b relative py-2 hidden md:table-cell border-slate-300 dark:border-slate-600 text-center">
              <TiEdit className="text-blue-600 dark:text-white inline-block mr-1 text-[18px]" />
              <MdDeleteForever className="text-red-600 dark:text-white inline-block text-[18px]" />
            </td>
          </tr>
        ))}
        <tr className={`absolute cursor-pointer modal translate-y-[-50%] translate-x-[-50%] transition-all duration-300 md:hidden modal bg-gray-600 opacity-0 z-50 p-2 rounded-sm`}>
          <td className="flex gap-3 items-center">
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

export default TablePengajuan;
