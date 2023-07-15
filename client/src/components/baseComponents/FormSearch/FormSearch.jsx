import Button from '../../baseComponents/Button/Button';

// const defaultValues = {listName: ''};

const FormSearch = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="search" placeholder="Search" {...register("Search", {, max: 0, min: 3, maxLength: 255})} />
      <Button />
    </form>
  );
};
  
  
export default FormSearch;