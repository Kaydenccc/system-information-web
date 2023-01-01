import React from 'react';
import { GoDiffAdded } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';

const TambahDataButton = ({ path, text }) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(path)} className=" flex gap-1 items-center px-4  bg-slate-100 dark:bg-gray-800 rounded-md text-gray-900 dark:text-gray-400 hover:text-gray-300 shadow-sm shadow-gray-500 hover:bg-gray-700  font-semibold">
      <GoDiffAdded />
      {!text ? 'Tambah Data' : text}
    </button>
  );
};

export default TambahDataButton;
