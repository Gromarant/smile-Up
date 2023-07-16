import { useState } from 'react';
import Avatar from '../../baseComponents/Avatar/Avatar';
import ListCard from '../../baseComponents/ListCard';
import FormCreateList from '../../baseComponents/FormCreateList';

const CreateList = () => {
  const [cardName, setCardName] = useState('Lista nueva');

  return (
    <>
      <Avatar className='userAvatar' /> 
      <p className='section_Name'>Crear nueva lista</p>
      <FormCreateList setCardName={setCardName}/>
      <ListCard content={{'name': cardName}}/>
    </>
  );
};

export default CreateList;