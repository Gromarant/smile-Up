import { useState } from 'react';
import Avatar from '../../baseComponents/Avatar/Avatar';
import Card from '../../baseComponents/Card';
import FormCreateList from '../../baseComponents/FormCreateList';

const CreateList = () => {
  const [cardName, setCardName] = useState('Lista nueva');

  return (
    <>
      <Avatar className='userAvatar' /> 
      <p className='userEmail'>LuisR@gmail.com</p>
      <FormCreateList setCardName={setCardName}/>
      <Card content={{'name': cardName}}/>
    </>
  );
};

export default CreateList;