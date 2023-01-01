import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import { FiMenu } from 'react-icons/fi';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { ImSun } from 'react-icons/im';
import { motion } from 'framer-motion';

const Home = () => {
  const [isOpenSide, setIsOpenSide] = useState(false);
  const [toggle, settoggle] = useState('dark');

  useEffect(() => {
    const sun = document.querySelector('.sun');
    const moon = document.querySelector('.moon');
    const userTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    //  Initial Theme check
    const themeCheck = () => {
      if (userTheme === 'dark' || (!userTheme && systemTheme)) {
        document.documentElement.classList.add('dark');
        moon.classList.add('opacity-0');
        moon.classList.add('invisible');
        settoggle(userTheme);
        return;
      }
      sun.classList.add('opacity-0');
      sun.classList.add('invisible');
      settoggle(userTheme);
    };
    themeCheck();
  }, []);
  // Manual theme Switch
  const themeSwitch = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      settoggle('light');
      return;
    }
    document.documentElement?.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    settoggle('dark');
  };
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex h-screen w-full overflow-hidden">
      <Sidebar isOpenSide={isOpenSide} setIsOpenSide={setIsOpenSide} />
      <div className="w-full ">
        <nav className="h-[56px] shadow-md dark:shadow-gray-700 px-6 w-full flex flex-row bg-slate-100 dark:bg-gray-900 items-center justify-between">
          <FiMenu onClick={() => setIsOpenSide(!isOpenSide)} className="dark:hover:text-white text-gray-800 dark:text-slate-400 text-3xl cursor-pointer hover:scale-[1.02]" />
          <span className="flex items-center gap-2">
            <p className="text-gray-800 dark:text-slate-300">Anhar Fadilah</p>
            <img className="h-[40px] w-[40px] object-cover rounded-md" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="profile avatar" />
            <span className="w-[2px] h-[30px] mr-2 ml-4 inline-block bg-slate-300"></span>
            <div className="flex cursor-pointer h-[30px] w-[30px] text-xl relative">
              <ImSun
                title="light mode"
                onClick={themeSwitch}
                className={`sun transition-all duration-300 absolute text-blue-400 ${toggle === 'dark' ? 'visible opacity-100' : 'invisible opacity-0'}  text-2xl left-1/2 top-[50%] translate-y-[-50%] translate-x-[-50%]`}
              />
              <BsFillMoonStarsFill
                title="dark mode"
                onClick={themeSwitch}
                className={`moon transition-all z-10 duration-300 absolute text-blue-400 ${toggle === 'light' ? 'visible opacity-100' : 'invisible opacity-0'}   text-2xl left-1/2 top-[50%] translate-y-[-50%] translate-x-[-50%]`}
              />
            </div>
          </span>
        </nav>
        <Outlet />
      </div>
    </motion.div>
  );
};

export default Home;
