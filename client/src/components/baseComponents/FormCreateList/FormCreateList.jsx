import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import Button from '../../baseComponents/Button/Button';


const defaultValues = {listName: ''};

const FormCreateList = ({setCardName}) => {
  const [inputValue, setInputValue] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm({...defaultValues});

  
  const onSubmit = data => {
    axios.post('http://localhost:3001/lists', {
            name: data.listName
          })
          .then(function (response) {
            console.log(response);
            setCardName(data.listName);
          })
          .catch(function (error) {
            console.log(error);
          });
  };
  
  const handleClick = () => {
    setInputValue('');
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  
  return (
    <form className='form_createList' onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Nombre de la lista" {...register("listName", 
       { minLength: {
          value: 3, 
          message: "debe tener un al menos 3 caracteres"
        }, 
        maxLength:{
          value: 50, 
          message: "debe tener máximo 50 caracteres"
        }
      })} onChange={handleChange} value={inputValue}/>
      {errors.name?.type === "required" && (
      <p role="alert">{errors.name?.message}</p>)}

      <Button className='createList_btn' text='Crear lista' onPress={handleClick}/>
    </form>
  );
};

FormCreateList.propTypes = {
  setCardName: PropTypes.string,
};

export default FormCreateList;