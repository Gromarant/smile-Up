import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BsPencil, BsTrash3 } from "react-icons/bs";
import Avatar from '../../baseComponents/Avatar/Avatar';
import ProductListCard from '../../baseComponents/ProductListCard/ProductListCard';
import axios from 'axios';
import Button from '../../baseComponents/Button/Button';


const ListDetails = () => {
  const { name } = useParams();
  const [listData, setListData] = useState([])
  const [listName, setListName] = useState('');
  const [isInputRendered, setIsInputRendered] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

    axios.get(`http://localhost:3001/lists?name=${name}`)
        .then(response => {
          setListData(response.data);
        })
        .catch(error => console.error(error));
  }, [name])
  
  const handleChange = (e) => {
    e.preventDefault();
    setListName(e.target.value);
  }

  const renderFormEdition = () => setIsInputRendered(true);

  const closeFormEdition = () => {
    setListName('');
    setIsInputRendered(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put('http://localhost:3001/lists', {
            name: name,
            newName: listName
          })
          .then((response) => {
            console.log(response);
            navigate(`/lists/${listName}`);
          })
          .catch(function (error) {
            console.log(error);
          });
    setListName('');
    closeFormEdition();
  }

  const sendData = () => {
    handleSubmit();
  };

  const goToEdit = () => navigate(`/lists/${name}/edit`);

  const deleteList = () => {

    axios.delete(`http://localhost:3001/lists?name=${name}`)
          .then(() => {
            navigate('/');
          })
          .catch(function (error) {
            console.log(error);
          });
  }

  return (
    <>
      <Avatar className='userAvatar' /> 
      <p className='section_Name'>Detalles de lista:</p>
      <section className='list_content'>
        <section className='list_header'>
          <div className='icons_List'>
            <BsTrash3 className='delete_btn' onClick={deleteList}/>
            <BsPencil className='edit_btn' onClick={renderFormEdition}/>
          </div>
          <h3 className='list_name'>{name}</h3>
          <button className='searchList_button' onClick={goToEdit}>Buscar Productos</button>
        </section>
        {isInputRendered && <form className='EditList_form' onSubmit={handleSubmit}>
          <input onChange={handleChange} type='text' placeholder={name} value={listName}/>
          <Button text='Guardar' onClick={sendData} />
          <button className='danger_btn' onClick={closeFormEdition}>Cancelar</button>
        </form>
        }
      </section>
      <section className='products_section'>
        {listData && listData.map(data => <ProductListCard content={data} key={`cBcR${data.title}`}/>)}
      </section>
    </>
  );
};

export default ListDetails;