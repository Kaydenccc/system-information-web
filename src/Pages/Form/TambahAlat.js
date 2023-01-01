import Button from '../../components/Button';
import Datetime from '../../components/Date';
import Form from '../../components/Form';
import Input from '../../components/Input';
import Select from '../../components/Select';

const TambahAlat = () => {
  return (
    <Form text="Tambah Alat">
      <Input textLabel={'Nama Barang'} label={'Barang'} type="text" placeholder="Masukan nama barang" />
      <Input textLabel={'Jumlah'} label={'jumlah'} type="number" placeholder="Masukan jumlah barang" />
      <Select dataSelects={['Ada', 'Hilang']} textLabel={'Kondisi'} label={'kondisi'} type="text" placeholder="Kondisi barang" />
      <Select dataSelects={['Baik', 'Rusak']} textLabel={'Status'} label={'Status'} type="text" placeholder="Status barang" />
      <Datetime />
      <Button text="Submit" />
    </Form>
  );
};

export default TambahAlat;
