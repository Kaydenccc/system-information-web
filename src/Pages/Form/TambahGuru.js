import React from 'react';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Select from '../../components/Select';

const TambahGuru = () => {
  return (
    <Form text="Tambah Guru">
      <Input label="guru" textLabel="Nama Guru" placeholder="Masukan nama guru" type="text" />
      <Input label="nik" textLabel="NIK" placeholder="Masukan NIK" type="text" />
      <Select textLabel="Jenis Kelamin" dataSelects={['Laki-laki', 'Perempuan']} />
      <Input label="mapel" textLabel="Mapel" placeholder="Masukan mapel" type="text" />
      <Button text="Submit" />
    </Form>
  );
};

export default TambahGuru;
