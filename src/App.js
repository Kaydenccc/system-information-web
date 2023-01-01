import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import NotFound from './Pages/NotFoundPage/NotFound';
import PortecRoute from './PortecRoute';
import Home from './Pages/Home/Home';
import Siswa from './Pages/Siswa/Siswa';
import Guru from './Pages/Guru/Guru';
import Dashboard from './Pages/Dashboard/Dashboard';
import Alat from './Pages/Alat/Alat';
import Pengajuan from './Pages/Pengajuan/Pengajuan';
import Peminjaman from './Pages/Peminjaman/Peminjaman';
import Pengembalian from './Pages/Pengambalian/Pengembalian';
import JadwalPraktek from './Pages/JadwalPraktek/JadwalPraktek';
import Suplier from './Pages/Suplier/Suplier';
import Pengadaan from './Pages/Pengadaan/Pengadaan';
import Rusak from './Pages/Rusak/Rusak';
import Hilang from './Pages/Hiang/Hilang';
import CetakPeminjaman from './Pages/Print/CetakPeminjaman';
import BarangSuplier from './Pages/BarangSuplier/BarangSuplier';
import CetakPengembalian from './Pages/Print/CetakPengembalian';
import CetakPengadaan from './Pages/Print/CetakPengadaan';
import CetakJadwalPraktek from './Pages/Print/CetakJadwalPraktek';
import CetakJadwalPengajar from './Pages/Print/CetakJadwalPengajar';
import CetakBarangMasuk from './Pages/Print/CetakBarangMasuk';
import CetakBarangRusak from './Pages/Print/CetakBarangRusak';
import CetakBarangHilang from './Pages/Print/CetakBarangHilang';
import TambahAlat from './Pages/Form/TambahAlat';
import TambahSiswa from './Pages/Form/TambahSiswa';
import TambahGuru from './Pages/Form/TambahGuru';
import TambahPeminjaman from './Pages/Form/TambahPeminjaman';
import TambahPengembalian from './Pages/Form/TambahPengembalian';
import TambahJadwal from './Pages/Form/TambahJadwal';
import TambahSuplier from './Pages/Form/TambahSuplier';
import TambahBarangSuplier from './Pages/Form/TambahBarangSuplier';
import TambahPengajuan from './Pages/Form/TambahPengajuan';
import TambahPengadaan from './Pages/Form/TambahPengadaan';
import TambahRusak from './Pages/Form/TambahRusak';
import TambahHilang from './Pages/Form/TambahHilang';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <div className="App h-full ">
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PortecRoute>
                <Home />
              </PortecRoute>
            }
          >
            <Route path="/" element={<Dashboard />} />
            <Route path="siswa" element={<Siswa />} />
            <Route path="guru" element={<Guru />} />
            <Route path="alat" element={<Alat />} />
            <Route path="pengajuan" element={<Pengajuan />} />
            <Route path="peminjaman" element={<Peminjaman />} />
            <Route path="pengembalian" element={<Pengembalian />} />
            <Route path="suplier" element={<Suplier />} />
            <Route path="jadwal-praktek" element={<JadwalPraktek />} />
            <Route path="pengadaan" element={<Pengadaan />} />
            <Route path="barang-rusak" element={<Rusak />} />
            <Route path="barang-hilang" element={<Hilang />} />
            <Route path="barang-suplier" element={<BarangSuplier />} />
            <Route path="tambah-alat" element={<TambahAlat />} />
            <Route path="tambah-siswa" element={<TambahSiswa />} />
            <Route path="tambah-guru" element={<TambahGuru />} />
            <Route path="tambah-peminjaman" element={<TambahPeminjaman />} />
            <Route path="tambah-pengembalian" element={<TambahPengembalian />} />
            <Route path="tambah-jadwal" element={<TambahJadwal />} />
            <Route path="tambah-suplier" element={<TambahSuplier />} />
            <Route path="tambah-barang-suplier" element={<TambahBarangSuplier />} />
            <Route path="tambah-pengajuan" element={<TambahPengajuan />} />
            <Route path="tambah-pengadaan" element={<TambahPengadaan />} />
            <Route path="tambah-barang-rusak" element={<TambahRusak />} />
            <Route path="tambah-barang-hilang" element={<TambahHilang />} />
            <Route path="report/peminjaman" element={<CetakPeminjaman />} />
            <Route path="report/pengembalian" element={<CetakPengembalian />} />
            <Route path="report/pengadaan" element={<CetakPengadaan />} />
            <Route path="report/jadwal-praktek" element={<CetakJadwalPraktek />} />
            <Route path="report/jadwal-pengajar" element={<CetakJadwalPengajar />} />
            <Route path="report/barang-masuk" element={<CetakBarangMasuk />} />
            <Route path="report/barang-rusak" element={<CetakBarangRusak />} />
            <Route path="report/barang-hilang" element={<CetakBarangHilang />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
