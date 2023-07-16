import { useState } from 'react';
import Avatar from '../../baseComponents/Avatar/Avatar';
import FormSearch from '../../baseComponents/FormSearch/FormSearch';
import ProductSearchCard from '../../baseComponents/ProductSearchCard/ProductSearchCard';
// import { Button } from '@nextui-org/react';

const Search = () => {
  const [searchresults, setSearchresults] = useState([]);

  console.log(searchresults.data);
  return (
    <>
      <Avatar className='userAvatar' /> 
      <p className='section_Name'>Buscar</p>
      <FormSearch setSearchresults={setSearchresults}/>
      {/* <section className='ordenation'>
        <select name="category">
          <option value="">Value 1</option>
          <option value="" selected>Value 2</option>
          <option value="">Value 3</option>
        </select>
      </section> */}

      <section className='productsFound_section'>
        {searchresults.data && searchresults.data?.map(result => <ProductSearchCard content={result} key={`cBcR${result.title}`}/>)}
      </section>
    </>
  );
};

export default Search;