import React from 'react';
import Button from '../../components/Button';
import Datetime from '../../components/Date';
import Form from '../../components/Form';
import Input from '../../components/Input';

const TambahBarangSuplier = () => {
  return (
    <Form text="Tambah Barang Suplier">
      <Input label="suplier" textLabel="Nama suplier" placeholder="Masukan nama suplier" type="text" />
      <Input label="barang" textLabel="nama barang" placeholder="Masukan nama barang" type="text" />
      <Input label="penerima" textLabel="penerima" placeholder="Masukan nama penerima" type="text" />
      <Input label="jumlah" textLabel="jumlah" placeholder="Masukan jumlah barang" type="text" />
      <Datetime />
      <Button text="Submit" />
    </Form>
  );
};

export default TambahBarangSuplier;
