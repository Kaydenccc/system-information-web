import React from 'react';
import { dataPraktek } from '../../../dummy';

const JadwalPraktekPrint = React.forwardRef((props, ref) => {
  return (
    <article className=" h-full w-full" ref={ref}>
      <header className="flex justify-center border-b-8 border-gray-600 w-full mx-auto">
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8jpDaaRFXqws4dcHU4_Msbh2-CUaGDVw4A&usqp=CAU" alt="logo institusi" />
        </div>
        <div className="print:text-center">
          <h1 className="font-bold text-xl">PEMERINTAHAN KALIMANTAN SELATAN</h1>
          <h1 className="font-bold text-xl">DINAS PENDIDIKAN DAN KEBUDAYAAN</h1>
          <h1 className="font-bold text-xl">SMK NEGERI 2 BANJARBARU</h1>
          <span className="text-[12px]">Jalan Nusantara Nomor 1 / Fax (0511)48843833 Loktabar Selatan Banjarbaru 70721</span>
          <span className="text-[12px]">
            Web Site <span>https://www.smkn2banjarbaru.ac.id</span> E-Mail <span>smkn_2banjarbaru@gmail.co.id</span>
          </span>
        </div>
      </header>
      <main className="flex justify-start overflow-x-auto flex-col items-start py-4 ">
        <h1 className="self-center uppercase text-xl font-bold">Laporan Jadwal Praktek</h1>
        <p className="mb-2  mt-8">
          <strong>Tanggal</strong> : {new Date().toLocaleDateString('ind', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <table className="border-collapse min-w-[975.5px] table-auto w-full ">
          <thead>
            <tr>
              <th className="text-center border  pb-2 border-slate-300 dark:border-slate-500 text-gray-800 dark:text-slate-300 ">No</th>
              <th className="text-start border px-2 pb-2 border-slate-300 dark:border-slate-500 text-gray-800 dark:text-slate-300 ">Mapel</th>
              <th className="text-start border pb-2 px-2 border-slate-300 dark:border-slate-500 text-gray-800 dark:text-slate-300 ">Guru</th>
              <th className="text-start border px-2 pb-2 border-slate-300 dark:border-slate-500 text-gray-800 dark:text-slate-300 ">Kelas</th>
              <th className="text-center px-2 border pb-2 border-slate-300 dark:border-slate-500 text-gray-800 dark:text-slate-300 ">Angkatan</th>
              <th className="text-start px-2 border pb-2 border-slate-300 dark:border-slate-500 text-gray-800 dark:text-slate-300 ">Tempat</th>
              <th className="text-start px-2 border pb-2 border-slate-300 dark:border-slate-500 text-gray-800 dark:text-slate-300 ">Tanggal</th>
              <th className="text-start px-2 border pb-2 border-slate-300 dark:border-slate-500 text-gray-800 dark:text-slate-300 ">Waktu</th>
            </tr>
          </thead>
          <tbody className="bg-slate-50 dark:bg-gray-800 client">
            {dataPraktek.map((data, i) => (
              <tr key={i} className="cursor-pointer">
                <td className="text-center py-2  border border-slate-300 dark:border-slate-600">{i + 1}</td>
                <td className="text-start relative py-2 px-2 border border-slate-300 dark:border-slate-600">{data.mapel}</td>
                <td className="text-start relative py-2 px-2 border border-slate-300 dark:border-slate-600">{data.pengajar}</td>
                <td className="text-start relative py-2 px-2 border border-slate-300 dark:border-slate-600">{data.kelas}</td>
                <td className="text-center relative border px-2 border-slate-300 dark:border-slate-600">{data.angkatan}</td>
                <td className="text-start relative border px-2 border-slate-300 dark:border-slate-600">{data.tempat}</td>
                <td className="text-start relative border px-2 py-2 border-slate-300 dark:border-slate-600">{data.tanggal}</td>
                <td className="text-start relative border px-2 py-2 border-slate-300 dark:border-slate-600">{data.waktu}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <footer className="self-end text-end font-medium flex justify-end flex-col mt-20">
        <p>Makassar, {new Date().toLocaleDateString('ind', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        <div className="space-y-12  ">
          <p>Admin</p>
          <p>Prof. Kaydencc26 MH</p>
        </div>
      </footer>
    </article>
  );
});

export default JadwalPraktekPrint;
