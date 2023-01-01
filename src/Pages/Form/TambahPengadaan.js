import React from 'react';
import Button from '../../components/Button';
import Datetime from '../../components/Date';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Select from '../../components/Select';

const TambahPengadaan = () => {
  return (
    <Form text="Tambah Pengadaan">
      <Input label="pengaju" textLabel="pengaju" placeholder="Masukan nama pengaju" type="text" />
      <Input label="barang" textLabel="Nama Barang" placeholder="Masukan nama barang" type="text" />
      <Input label="jumlah" textLabel="Jumlah jumlah" placeholder="Masukan jumlah barang" type="text" />
      <Input label="keterangan" textLabel="keterangan" placeholder="Masukan keterangan" type="text" />
      <Select textLabel="Status" dataSelects={['Proses', 'Selesai', 'Ditolak']} />
      <Datetime />
      <Button text="Submit" />
    </Form>
  );
};

export default TambahPengadaan;
