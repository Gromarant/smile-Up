import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '../../baseComponents/Avatar/Avatar';
import ProductListCard from '../../baseComponents/ProductListCard/ProductListCard';
import axios from 'axios';


const ListDetails = () => {
  const [listData, setListData] = useState([])
  const { name } = useParams();

  useEffect(() => {

    axios.get(`http://localhost:3001/lists?name=${name}`)
        .then(response => {
          console.log(response.data);
          setListData(response.data);
        })
        .catch(error => console.error(error));
  }, [name])
  

  return (
    <>
      <Avatar className='userAvatar' /> 
      <section className='list_header'>
        <p className='section_Name'>Detalles de lista:</p>
        <h2 className='list_name'>{name}</h2>
      </section>
      <section className='products_section'>
        {listData && listData.map(list => <ProductListCard content={list} key={`cBcR${list.name}`}/>)}
      </section>
    </>
  );
};

export default ListDetails;