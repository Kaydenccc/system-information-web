import React from 'react';
const TableNewUser = () => {
  return (
    <table className="md:table-auto border-collapse md:border-separate table-fixed w-full  md:w-full">
      <thead>
        <tr>
          <th className="text-start border-b border-slate-300 dark:border-slate-500 pl-6 pb-2 hidden md:table-cell text-gray-800 dark:text-slate-300">No.</th>
          <th className="text-start border-b border-slate-300 dark:border-slate-500 pl-6 pb-2 text-gray-800 dark:text-slate-300">User</th>
          <th className="text-center border-b border-slate-300 dark:border-slate-500 md:pl-6 md:text-start pb-2 text-gray-800 dark:text-slate-300">Jenis Kelamin</th>
          <th className="text-start border-b border-slate-300 dark:border-slate-500 md:pl-6 pb-2 hidden md:table-cell text-gray-800 dark:text-slate-300">Tgl. Masuk</th>
          <th className="text-center border-b border-slate-300 dark:border-slate-500 pb-2 text-gray-800 dark:text-slate-300">Status</th>
        </tr>
      </thead>
      <tbody className="bg-slate-50 dark:bg-gray-800">
        <tr>
          <td className="border-b py-2 pl-6 hidden md:table-cell border-slate-300 dark:border-slate-600">1</td>
          <td className="border-b py-2 pl-6  border-slate-300 dark:border-slate-600">Anhar Fadilah</td>
          <td className="border-b py-2 text-center md:text-start md:pl-6 border-slate-300 dark:border-slate-600">Laki-laki</td>
          <td className="border-b py-2 md:pl-6  border-slate-300 dark:border-slate-600 hidden md:table-cell">01-12-2010</td>
          <td className="border-b py-2 border-slate-300 dark:border-slate-600 text-center">
            <span className="bg-green-300 px-[10px] py-[2px] font-medium rounded-full text-green-700">Siswa</span>
          </td>
        </tr>
        <tr>
          <td className="border-b py-2 pl-6 hidden md:table-cell border-slate-300 dark:border-slate-600">2</td>
          <td className="border-b py-2 pl-6  border-slate-300 dark:border-slate-600">Firmansyah</td>
          <td className="border-b py-2 text-center md:text-start md:pl-6 border-slate-300 dark:border-slate-600">Laki-laki</td>
          <td className="border-b py-2 md:pl-6  border-slate-300 dark:border-slate-600 hidden md:table-cell">01-12-2010</td>
          <td className="border-b py-2 border-slate-300 dark:border-slate-600 text-center">
            <span className="bg-yellow-300 px-[10px] py-[2px] font-medium rounded-full  text-yellow-700">Guru</span>
          </td>
        </tr>
        <tr>
          <td className="border-b py-2 pl-6 hidden md:table-cell border-slate-300 dark:border-slate-600">3</td>
          <td className="border-b py-2 pl-6  border-slate-300 dark:border-slate-600">Geri Alfian Putra</td>
          <td className="border-b py-2 text-center md:text-start md:pl-6 border-slate-300 dark:border-slate-600">Laki-laki</td>
          <td className="border-b py-2 md:pl-6  border-slate-300 dark:border-slate-600 hidden md:table-cell">01-12-2010</td>
          <td className="border-b py-2 border-slate-300 dark:border-slate-600 text-center">
            <span className="bg-indigo-300 px-[10px] py-[2px] font-medium rounded-full  text-indigo-700">Suplier</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableNewUser;
