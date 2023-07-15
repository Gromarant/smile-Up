import { useState } from 'react';
import Avatar from '../../baseComponents/Avatar/Avatar';
// import Card from '../../baseComponents/Card';
import FormCreateList from '../../baseComponents/FormCreateList';

const CreateList = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <Avatar className='userAvatar' /> 
      <p className='userEmail'>LuisR@gmail.com</p>
      <FormCreateList />
      {/* <Card /> */}
    </>
  );
};

export default CreateList;
