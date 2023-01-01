import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useNavigate } from 'react-router-dom';
import BarangRusakPrint from './ComponentToPrint/BarangRusakPrint';

const CetakBarangRusak = () => {
  const navigate = useNavigate();
  let componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: 'print',
    documentTitle: 'Laporan Peminjaman',
  });
  return (
    <div className="pb-20 h-screen !scrollbar-thin !scrollbar-track-transparent scrollbar-thumb-slate-400/30 scroll-smooth">
      <div className="px-6 py-6">
        <BarangRusakPrint ref={componentRef} />
      </div>
      <div className="w-full px-6 flex justify-end gap-3">
        <button className="bg-slate-200 text-gray-900 dark:text-slate-200 dark:bg-slate-600 py-2 w-28  rounded-md " onClick={() => navigate(-1)}>
          Back
        </button>
        <button className="bg-gray-900 text-slate-200 dark:bg-slate-600 py-2 w-28  rounded-md " onClick={handlePrint}>
          Print !
        </button>
      </div>
    </div>
  );
};

export default CetakBarangRusak;
