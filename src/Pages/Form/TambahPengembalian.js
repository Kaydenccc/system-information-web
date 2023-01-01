import React from 'react';
import Button from '../../components/Button';
import Datetime from '../../components/Date';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Select from '../../components/Select';

const TambahPengembalian = () => {
  return (
    <Form text="Tambah Pengembalian">
      <Input label="peminjam" textLabel="Nama Peminjam" placeholder="Masukan nama peminjam" type="text" />
      <Input label="barang" textLabel="Nama Barang" placeholder="Masukan nama barang" type="text" />
      <Input label="kembali" textLabel="Jumlah Kembali" placeholder="Masukan jumlah barang yang kembali" type="number" />
      <Input label="rusak" textLabel="Jumlah Rusak" placeholder="Masukan jumlah barang yang rusak" type="number" />
      <Input label="hilang" textLabel="Jumlah Hilang" placeholder="Masukan jumlah barang yang hilang" type="number" />
      <Select textLabel="Status" dataSelects={['Proses', 'Selesai']} />
      <Datetime />
      <Button text="Submit" />
    </Form>
  );
};

export default TambahPengembalian;
