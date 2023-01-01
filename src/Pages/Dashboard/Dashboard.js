import React from 'react';
import { GoTools, GoIssueClosed } from 'react-icons/go';
import { GiToolbox, GiBrokenAxe } from 'react-icons/gi';
import { FaUsersCog, FaUserTie, FaUsers, FaUserGraduate } from 'react-icons/fa';
import TableNewUser from '../../components/Tables/TableNewUser';
import { motion } from 'framer-motion';
const cardsDashboard = [
  {
    them: 'text-cyan-600 dark:text-cyan-400',
    name: 'Alat',
    count: 6,
    icon: <GoTools className="text-3xl md:text-4xl" />,
  },
  {
    them: 'text-green-600 dark:text-green-400',
    name: 'Peminjam',
    count: 10,
    icon: <FaUsersCog className="text-3xl md:text-4xl" />,
  },
  {
    them: 'text-blue-600 dark:text-blue-400',
    name: 'Siswa',
    count: 802,
    icon: <FaUsers className="text-3xl md:text-4xl" />,
  },
  {
    them: 'text-yellow-600 dark:text-yellow-400',
    name: 'Guru',
    count: 100,
    icon: <FaUserGraduate className="text-3xl md:text-4xl" />,
  },
  {
    them: 'text-orange-600 dark:text-orange-400',
    name: 'Suplier',
    count: 10,
    icon: <FaUserTie className="text-3xl md:text-4xl" />,
  },
  {
    them: 'text-lime-600 dark:text-lime-200',
    name: 'Barang Suplier',
    count: 110,
    icon: <GiToolbox className="text-3xl md:text-4xl" />,
  },
  {
    them: 'text-indigo-600 dark:text-indigo-400',
    name: 'Barang Rusak',
    count: 20,
    icon: <GiBrokenAxe className="text-3xl md:text-4xl" />,
  },
  {
    them: 'text-red-600 dark:text-red-400',
    name: 'Barang Hilang',
    count: 15,
    icon: <GoIssueClosed className="text-3xl md:text-4xl" />,
  },
];
const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full max-h-full md:h-full flex flex-col flex-1 p-4 md:p-6 !pb-[92px] gap-8 overflow-y-auto !scrollbar-thin !scrollbar-track-transparent scrollbar-thumb-slate-400/30 scroll-smooth "
    >
      <div className="text-start">
        <h1 className="text-5xl font-bold bg-gradient-to-br from-gray-300 via-gray-800 dark:via-gray-400 to-gray-800 text-transparent bg-clip-text">
          Dashboard<span className="text-[#23a1d3] text-3xl md:text-4xl">.</span>
        </h1>
        <p className="text-gray-800 dark:text-slate-400">Welcome to the Dashboard Page.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-h-full lg:grid-cols-4 gap-4 ">
        {cardsDashboard.map((card) => (
          <div key={card.name} className="bg-slate-100 dark:bg-gray-900 p-4 md:px-6 flex justify-between items-center group cursor-pointer">
            <span className="h-full md:h-16 md:w-16  rounded-full md:bg-white  md:dark:bg-black flex items-center justify-center group-hover:rotate-45 group-hover:scale-110 transition-all duration-300 ">{card.icon}</span>
            <span className="flex flex-col text-end">
              <span className="text-3xl text-gray-800 dark:text-gray-400">{card.count}</span>
              <span className={`${card.them} md:text-lg font-semibold `}>{card.name.toLocaleUpperCase()}</span>
            </span>
          </div>
        ))}
      </div>
      <div className="text-start space-y-4">
        <h3 className="text-2xl md:text-3xl text-gray-500 dark:text-gray-300 font-semibold">New Users</h3>
        <div className="bg-slate-100 dark:bg-gray-900 border-slate-300 dark:border-slate-600 border py-8 rounded-lg overflow-hidden">
          <TableNewUser />
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
