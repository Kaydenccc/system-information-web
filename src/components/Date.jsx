import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import Input from './Input';

import 'primereact/resources/themes/lara-dark-purple/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons

const Datetime = () => {
  const [date, setDate] = useState(new Date().toLocaleDateString());
  const [isOpen, setIsOpen] = useState(false);
  console.log(date);
  return (
    <div className="">
      <Input
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        type="text"
        label="tanggal"
        value={date}
        textLabel="Tanggal"
        onChange={() => {}}
      />
      {isOpen && (
        <div className="absolute z-20 backdrop-blur-md w-full h-full left-0 top-0 flex justify-center items-center">
          <Calendar dateFormat="" className="w-fit" onSelect={() => setIsOpen(false)} value={date} inline onChange={(e) => setDate(e.value.toLocaleDateString())}></Calendar>
        </div>
      )}
    </div>
  );
};

export default Datetime;
