import Input from '../components/Input';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-full sm:h-screen sm:overflow-hidden overflow-y-auto flex relative font-['Changa']  bg-[url('https://www.elsevier.com/__data/assets/image/0004/823261/information-system-supporting-science.jpg')] 
    bg-fixed
     bg-cover bg-no-repeat bg-center"
    >
      <div className="w-full relative md:static flex h-full">
        <motion.span
          initial={{ y: '-100vh', x: '-100vh' }}
          animate={{ y: 0, x: 0 }}
          transition={{
            duration: 1,
          }}
          exit={{
            y: '-100vh',
            x: '-100vh',
            transition: {
              delay: 0.6,
              duration: 1,
            },
          }}
          className="flex-1 flex justify-center items-center  z-10 bg-gray-900/50 fixed sm:absolute h-full w-full clip-triagle1"
        ></motion.span>
        <div className="w-[90%]  mt-8 mb-8 md:mt-0 md:mb-0 flex md:flex-row flex-col mx-auto w-full text-white relative z-20 ">
          <motion.div
            key={'text'}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.55,
              },
            }}
            transition={{ delay: 1 }}
            className="text-start flex justify-center flex-col flex-none md:flex-[0.7]"
          >
            <p className="text-3xl md:text-6xl w-[90%] leading-tight font-semibold">Selama datang di sistem informasi web</p>
            <p className="max-w-lg my-4">Telusuri dan dapatkan beragam informasi tentang praktek,jadwal pelajaran, peminjaman barang, dll.</p>
            <footer className="py-4 mt-12 hidden sm:inline-block">
              <p>Created by Kaydenccc</p>
              <p>&copy;2022</p>
            </footer>
          </motion.div>
          <div className="md:flex-[0.3] flex-none flex items-center my-8 md:my-0 ">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.55,
                },
              }}
              className="bg-slate-300/70  w-full text-gray-900 rounded-md overflow-hidden shadow-2xl shadow-gray-500"
            >
              <div className="w-full h-[120px] md:h-[200px] bg-[url('https://www.skylineuniversity.ac.ae/blog/images/2021/01/08/isvsit.jpg')] bg-cover bg-no-repeat bg-center"></div>
              <h1 className="text-2xl my-2">Sign In</h1>
              <form className="p-4 pt-0">
                <Input color={'text-gray-900'} textLabel={'Username'} label="username" placeholder={'Username'} type="text" />
                <Input color={'text-gray-900'} textLabel={'password'} label="password" placeholder={'Password'} type="password" />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/');
                  }}
                  className={`p-[10px] shadow-md bg-slate-200 hover:bg-slate-300 rounded-sm dark:hover:bg-gray-800  dark:bg-gray-700 w-full font-bold `}
                >
                  Login
                </button>
              </form>
            </motion.div>
          </div>
          <footer className="py-4 inline-block sm:hidden">
            <p>Created by Kaydenccc</p>
            <p>&copy;2022</p>
          </footer>
        </div>
        <motion.span
          initial={{ y: '100vh', x: '100vh' }}
          animate={{ y: 0, x: 0 }}
          transition={{
            duration: 1,
          }}
          exit={{
            y: '100vh',
            x: '100vh',
            transition: {
              delay: 0.6,
              duration: 1,
            },
          }}
          className="clip-triagle2 bg-slate-500/50 h-full flex-1 w-full fixed sm:absolute  z-10"
        ></motion.span>
      </div>
    </div>
  );
};

export default Login;
