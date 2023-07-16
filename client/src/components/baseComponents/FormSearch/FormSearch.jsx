import { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import axios from 'axios';
import Button from '../../baseComponents/Button/Button';


const FormSearch = ({setSearchresults}) => {
  const [inputValue, setInputValue] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  
  const onSubmit = data => {
    axios.get(`http://localhost:3001/products?title=${data.search}`)
          .then(response => {
            if (response) {
              setSearchresults(response)
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    setInputValue('');
  };

  const handleClick = () => {
    setInputValue('');
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form className='form_search' onSubmit={handleSubmit(onSubmit)}>
     <input type="search" placeholder="buscar productos" {...register("search", 
       { minLength: {
          value: 3, 
          message: "debe tener un al menos 3 caracteres"
        }, 
        maxLength:{
          value: 255, 
          message: "debe tener máximo 255 caracteres"
        }
      })} onChange={handleChange} value={inputValue}/>
      {errors.name?.type === "required" && (
      <p role="alert">{errors.name?.message}</p>)}

      <Button className='search_btn' text='Buscar' onPress={handleClick}/>
    </form>
  );
}; 
  
FormSearch.propTypes = {
  setSearchresults: PropTypes.func,
}

export default FormSearch;