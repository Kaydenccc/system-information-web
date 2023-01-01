import React from 'react';
import Button from '../../components/Button';
import Datetime from '../../components/Date';
import Form from '../../components/Form';
import Input from '../../components/Input';

const TambahHilang = () => {
  return (
    <Form text="Tambah Barang Hilang">
      <Input label="barang" textLabel="Nama barang" placeholder="Masukan nama barang" type="text" />
      <Input label="nama" textLabel="nama" placeholder="Masukan nama" type="text" />
      <Input label="jumlah" textLabel="jumlah" placeholder="Masukan jumlah" type="number" />
      <Input label="harga" textLabel="harga" placeholder="Masukan harga 1 barang" type="text" />
      <Input label="keterangan" textLabel="keterangan" placeholder="Masukan keterangan" type="text" />
      <Datetime />
      <Button text="Submit" />
    </Form>
  );
};

export default TambahHilang;
