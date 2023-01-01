import React from 'react';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';

const TambahSuplier = () => {
  return (
    <Form text="Tambah Suplier">
      <Input label="suplier" textLabel="Nama suplier" placeholder="Masukan nama suplier" type="text" />
      <Input label="asal" textLabel="asal" placeholder="Masukan asal" type="text" />
      <Input label="Alamat" textLabel="Alamat" placeholder="Masukan Alamat" type="text" />
      <Input label="nomor" textLabel="nomor hp" placeholder="Masukan nomor hp" type="text" />
      <Button text="Submit" />
    </Form>
  );
};

export default TambahSuplier;
