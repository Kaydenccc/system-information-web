import React, { useState, useEffect } from 'react';
import { AiOutlineHome, AiOutlineArrowLeft } from 'react-icons/ai';
import { BiSave } from 'react-icons/bi';
import { CiBoxList } from 'react-icons/ci';
import { BiChevronDown } from 'react-icons/bi';

import { FiLogIn } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
const mainmenu = [
  { menu: 'Alat', path: '/alat' },
  { menu: 'Siswa', path: '/siswa' },
  { menu: 'Guru', path: '/guru' },
  { menu: 'Peminjaman', path: '/peminjaman' },
  { menu: 'Pengembalian', path: '/pengembalian' },
  { menu: 'Jadwal praktek', path: '/jadwal-praktek' },
  { menu: 'Suplier', path: '/suplier' },
  { menu: 'Barang Suplier', path: '/barang-suplier' },
  { menu: 'Pengajuan', path: '/pengajuan' },
  { path: '/pengadaan', menu: 'Pengadaan' },
  { path: '/barang-rusak', menu: 'Barang rusak' },
  { path: '/barang-hilang', menu: 'Barang hilang' },
];
const reportmenu = [
  { menu: 'Peminjaman', path: '/report/peminjaman' },
  { menu: 'Pengembalian', path: '/report/pengembalian' },
  { menu: 'Pengadaan', path: '/report/pengadaan' },
  { menu: 'Jadwal praktek', path: '/report/jadwal-praktek' },
  { path: '/report/jadwal-pengajar', menu: 'Jadwal pengajar' },
  { menu: 'Barang masuk', path: '/report/barang-masuk' },
  { path: '/report/barang-rusak', menu: 'Barang rusak' },
  { path: '/report/barang-hilang', menu: 'Barang hilang' },
];
// MAIN MENU
const variants = {
  initial: {
    y: -100,
    opacity: 0,
    height: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
    height: 439,
  },
  exit: {
    y: -80,
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.02,
    },
  },
};

// REPORT MENU
const variantsReport = {
  initial: {
    y: -80,
    opacity: 0,
    height: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
    height: 320,
  },
  exit: {
    y: -50,
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.02,
    },
  },
};

const Sidebar = ({ isOpenSide, setIsOpenSide }) => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenReport, setIsOpenReport] = useState(false);

  useEffect(() => {
    let cancel = false;
    if (!cancel) {
      if (!isOpenSide) {
        setIsOpen(false);
        setIsOpenReport(false);
      }
    }

    return () => {
      cancel = true;
    };
  }, [isOpenSide]);

  return (
    <div
      className={`md:min-w-[70px] min-w-[260px]  ${isOpenSide ? 'md:w-[260px] md:min-w-[260px]' : 'md:w-[70px]'} fixed overflow-hidden   md:static top-0 ${
        isOpenSide ? 'left-0' : 'left-[-100vh]'
      } transition-all ease-in-out duration-500 flex flex-col justify-between z-10 dark:bg-[#18415F] bg-slate-200 h-full text-gray-900 dark:text-white `}
    >
      <div className="overflow-hidden flex flex-col">
        <div className="h-28 dark:bg-[#18415F] bg-slate-200 items-center relative left-0 top-0 flex justify-between md:justify-center border-b-2 pl-6 md:pl-0 border-slate-300 dark:border-[#103047]">
          <AiOutlineArrowLeft onClick={() => setIsOpenSide(!isOpenSide)} className=" text-2xl text-slate-400 hover:text-white cursor-pointer md:hidden" />
          <img
            className={`h-full ${isOpenSide ? 'md:h-full' : 'md:h-[70px] md:w-[70px]'} transition-all duration-300`}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8jpDaaRFXqws4dcHU4_Msbh2-CUaGDVw4A&usqp=CAU"
            alt="profile avatar"
          />
        </div>
        <ul className="w-full text-start ">
          <Link
            to="/"
            className={`${
              pathname === '/' ? 'bg-slate-300 dark:bg-slate-600' : 'bg-slate-200 dark:bg-[#18415F]'
            } w-full relative z-20  flex py-2 items-center gap-2 group px-6 transition-all duration-300 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-600`}
          >
            <span className="flex flex-row gap-2 font-medium">
              <AiOutlineHome className="text-[24px]  group-hover:rotate-12 group-hover:scale-[1.2] transition-all duration-300" />
              <span className={`${isOpenSide ? '' : 'md:opacity-0 '} whitespace-nowrap transition-all duration-300`}>Dashboar</span>
            </span>
          </Link>
          <li className={`${isOpen ? 'bg-slate-50 dark:bg-gray-800' : ''} transition duration-500 z-10 relative`}>
            <span
              onClick={() => {
                setIsOpen(!isOpen);
                setIsOpenReport(false);
              }}
              className={`${
                isOpen ? 'bg-slate-50 dark:bg-gray-800' : 'bg-slate-200 dark:bg-[#18415F]'
              } shadow-md dark:shadow-slate-600 z-10 relative flex items-center group justify-between px-6 py-2 cursor-pointer transition-all duration-300  hover:bg-slate-300 dark:hover:bg-gray-800 `}
            >
              <span className="flex items-center gap-2 font-medium">
                <CiBoxList className="text-[24px] group-hover:rotate-12 transition-all duration-300 group-hover:scale-[1.2]" />
                <span className={`${isOpenSide ? '' : 'md:opacity-0 '} whitespace-nowrap transition-all duration-300`}>Main</span>
              </span>
              <BiChevronDown className={`text-[24px] ${isOpenSide ? '' : 'md:opacity-0 '} whitespace-nowrap transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </span>
            <AnimatePresence mode="wait">
              {isOpen && (
                <motion.ul
                  key="modal"
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className={` text-black dark:text-white/50 overflow-y-scroll !scrollbar-thin !scrollbar-track-transparent scrollbar-thumb-slate-400/30 scroll-smooth animate-appear duration-500 ${
                    isOpenSide ? '' : 'md:opacity-1 '
                  } whitespace-nowrap`}
                >
                  {mainmenu.map((menu, i) => (
                    <motion.li
                      initial={{
                        y: -100,
                        opacity: 0,
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                      }}
                      exit={{ y: -100, opacity: 0 }}
                      transition={{
                        delay: 0.02 * i,
                        ease: 'easeInOut',
                      }}
                      className={`${pathname === menu.path || pathname === menu.path ? 'bg-slate-500 dark:bg-slate-600 text-white' : null} pl-14 relative transition-all duration-300 cursor-pointer hover:bg-slate-600 hover:text-white`}
                      key={i}
                    >
                      <Link className={`${isOpenSide ? '' : 'md:opacity-0 md:transition-all duration-500'} py-2 relative whitespace-nowrap w-full inline-block`} to={menu.path}>
                        {menu.menu}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li className={`${isOpenReport ? 'bg-slate-50 dark:bg-gray-800' : ''} transition-all relative z-10 duration-500`}>
            <span
              onClick={() => {
                setIsOpenReport(!isOpenReport);
                setIsOpen(false);
              }}
              className="z-10 shadow-md dark:shadow-slate-600 relative flex items-center group justify-between px-6 py-2 cursor-pointer transition-all duration-300 dark:bg-[#18415F] bg-slate-200 h-full hover:bg-slate-300 dark:hover:bg-gray-800 "
            >
              <span className="flex items-center gap-2 font-medium">
                <BiSave className="text-[24px] group-hover:rotate-12 transition-all duration-300 group-hover:scale-[1.2]" />
                <span className={`${isOpenSide ? '' : 'md:opacity-0 '} whitespace-nowrap transition-all duration-300`}>Report</span>
              </span>
              <BiChevronDown className={`text-[24px] ${isOpenSide ? '' : 'md:opacity-0 '} whitespace-nowrap transition-all duration-300 ${isOpenReport ? 'rotate-180' : ''}`} />
            </span>
            <AnimatePresence mode="wait">
              {isOpenReport && (
                <motion.ul
                  key="modal"
                  variants={variantsReport}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className={` overflow-y-hidden overflow-x-hidden relative text-black dark:text-white/50 animate-appear duration-500 ${isOpenSide ? '' : 'md:opacity-0 '} whitespace-nowrap`}
                >
                  {reportmenu.map((menu, i) => (
                    <motion.li
                      initial={{
                        y: -100,
                        opacity: 0,
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                      }}
                      exit={{ y: -100, opacity: 0 }}
                      transition={{
                        delay: 0.02 * i,
                        ease: 'easeInOut',
                      }}
                      className={`${pathname === menu.path || pathname === menu.path ? 'bg-slate-500 dark:bg-slate-600 text-white' : null}  pl-14 transition-all duration-300 cursor-pointer hover:bg-slate-600 hover:text-white`}
                      key={menu.menu}
                    >
                      <Link className={`${isOpenSide ? '' : 'md:opacity-0 md:transition-all duration-300'} py-2 whitespace-nowrap w-full inline-block`} to={menu.path}>
                        {menu.menu}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        </ul>
      </div>
      <div className="py-5 absolute md:relative left-0 bottom-0 w-full dark:bg-[#1a4a6c] bg-slate-100 z-10 border-t-[1px] border-slate-300 dark:border-[#103047]">
        <Link className="w-full h-full flex py-2 items-center gap-2 group px-6 transition-all duration-300 cursor-pointer">
          <span className="flex flex-row gap-2">
            <FiLogIn className="text-[24px] group-hover:rotate-12 group-hover:scale-[1.2] transition-all duration-300" />
            <span className={`${isOpenSide ? '' : 'md:opacity-0 '} whitespace-nowrap transition-all duration-300`}>Logout</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
