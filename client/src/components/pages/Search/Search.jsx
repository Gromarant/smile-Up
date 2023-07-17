import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Avatar from '../../baseComponents/Avatar/Avatar';
import FormSearch from '../../baseComponents/FormSearch/FormSearch';
import ProductSearchCard from '../../baseComponents/ProductSearchCard/ProductSearchCard';
import ProductListCard from '../../baseComponents/ProductListCard/ProductListCard';


const Search = () => {
  const [listData, setListData] = useState([]);
  const [searchresults, setSearchresults] = useState([]);
  const { name } = useParams();
  const navigate = useNavigate();


  useEffect(() => {

    axios.get(`http://localhost:3001/lists?name=${name}`)
        .then(response => {
          setListData(response.data);
        })
        .catch(error => console.error(error));
  }, [name]);


  const addToList = (product) => {
    setListData(oldListData => [...oldListData, product]);
  }

  const removeFromList = (product) => {
    setListData(oldListData => oldListData.filter(listProduct => listProduct.product_id !== product.product_id))
  };

  const isInTheList = (product) => {
    const inTheList = listData.some(listProduct => listProduct.product_id === product.product_id)
    return inTheList;
  };


  const saveList = () => {

    axios.put('http://localhost:3001/lists', {
          name: name,
          products: listData
        })
        .then(() => {
          navigate(`/lists/${name}`);
        })
        .catch(function (error) {
          console.log(error);
        });
    
  }

  return (
    <>
      <Avatar className='userAvatar' /> 
      <p className='section_Name'>Buscar</p>
      <FormSearch setSearchresults={setSearchresults}/>
      <section className='aside_plus_search'>
        <aside className='aside_ListProducts'>
          <h3>Mis productos</h3>
          <button className='saveList_btn' onClick={saveList}>Guardar</button>
          {listData && listData?.map(result => <ProductListCard content={result} key={`cBcR${result.title}`}/>)}
        </aside>

        {searchresults?.data && <section className='productsFound_section'>
          <h3>Resultados de búsqueda</h3>
          <div className='result_products'>
            {searchresults.data?.map(result => {
              const isSelected = isInTheList(result);
              const handleClick = isSelected ? removeFromList : addToList;
              return <ProductSearchCard
                handleClick={() => handleClick(result)}
                isSelected={isSelected}
                content={result}
                key={`cBcR${result.title}`}/>
            })}
          </div>
        </section>
        }
      </section>
    </>
  );
};

export default Search;