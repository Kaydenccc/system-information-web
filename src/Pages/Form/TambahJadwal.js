import React from 'react';
import Button from '../../components/Button';
import Datetime from '../../components/Date';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Select from '../../components/Select';
const dataClasses = ['PTIK A', 'PTIK B', 'PTIK C', 'PTIK D', 'PTIK E', 'PTIK F', 'PTIK G'];
const TambahJadwal = () => {
  console.log(new Date().getTime());
  return (
    <Form text="Tambah Jadwal">
      <Input label="mapel" textLabel="mapel" placeholder="Masukan nama mapel" type="text" />
      <Input label="guru" textLabel="nama guru" placeholder="Masukan nama guru" type="text" />
      <Select label="kelas" textLabel="Kelas" dataSelects={dataClasses} />
      <Input label="angkatan" textLabel="Angkatan" placeholder="ex:2020" type="text" pattern="[A-Za-z]{4}" />
      <Input label="tempat" textLabel="tempat" placeholder="Masukan tempat" type="text" />
      <Input label="mulai" textLabel="Jam Mulai" type="time" />
      <Input label="selesai" textLabel="Jam selesai" type="time" />
      <Datetime />
      <Button text="Submit" />
    </Form>
  );
};

export default TambahJadwal;
