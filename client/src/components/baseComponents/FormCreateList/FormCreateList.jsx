import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Button from '../../baseComponents/Button/Button';

const FormCreateList = () => {
  const [InputValue, setInputValue] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm('');
  const onSubmit = data => console.log(data.message);

  
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // const handleClick = () => {
  //   if (InputValue) {
  //     setInputValue()
  //   }
  //   setInputValue('')
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   handleClick();
  // };
  
  return (
    <form className='form_createList' onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Nombre de la lista" {...register("Nombre de la lista", 
       { minLength: {
          value: 3, 
          message: "debe tener un al menos 5 caracteres"
        }, 
        maxLength:{
          value: 50, 
          message: "debe tener máximo 50 caracteres"
        }
      })} onChange={handleChange} value={'vaor del input'}/>
      {errors.name?.type === "required" && (
      <p role="alert">{errors.name?.message}</p>)}

      <Button className='createList_btn' text='Crear lista' onPress={handleClick}/>
    </form>
  );
};

export default FormCreateList;