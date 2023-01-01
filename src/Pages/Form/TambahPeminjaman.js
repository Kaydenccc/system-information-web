import React from 'react';
import Button from '../../components/Button';
import Datetime from '../../components/Date';
import Form from '../../components/Form';
import Input from '../../components/Input';

const TambahPeminjaman = () => {
  return (
    <Form text="Tambah Peminjaman">
      <Input label="peminjam" textLabel="Peminjam" placeholder="Masukan nama peminjam" type="text" />
      <Input label="barang" textLabel="Barang" placeholder="Masukan nama barang" type="text" />
      <Input label="jumlah" textLabel="Jumlah" placeholder="Jumlah barang" type="number" />
      <Input label="keterangan" textLabel="Keterangan" placeholder="Masukan keterangan" type="text" />
      <Datetime />
      <Button text="Submit" />
    </Form>
  );
};

export default TambahPeminjaman;
