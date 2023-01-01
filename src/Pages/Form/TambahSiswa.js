import React from 'react';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Select from '../../components/Select';
const dataClasses = ['PTIK A', 'PTIK B', 'PTIK C', 'PTIK D', 'PTIK E', 'PTIK F', 'PTIK G'];
const TambahSiswa = () => {
  return (
    <Form text="Tambah Siswa">
      <Input label="siswa" textLabel="Nama Siswa" placeholder="Masukan nama siswa" type="text" />
      <Select label="kelas" textLabel="Kelas" dataSelects={dataClasses} />
      <Input label="angkatan" textLabel="Angkatan" placeholder="Masukan angkatan" type="text" />
      <Button text="Submit" />
    </Form>
  );
};

export default TambahSiswa;
