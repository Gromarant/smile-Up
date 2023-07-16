import Avatar from '../../baseComponents/Avatar/Avatar';
import { BsPlusCircle, /*BsArrowUpCircleFill*/ } from 'react-icons/bs';
import ListCard from '../../baseComponents/ListCard/ListCard';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [lists, setlists] = useState([]);

  
  useEffect(() => {
    axios.get('http://localhost:3001/lists')
      .then(response => {
         if (response) {
            setlists(response.data)
         }
      });
      
  }, [])


  return (
    <>
      <Avatar className='userAvatar' /> 
      <p className='section_Name'>Mis listas</p>
      <Link to={`/create`}>
        <BsPlusCircle className='add_list_icon' />
      </Link>
      <section className='userList_section'>
        {lists && lists?.map(list => <ListCard content={{"name": `${list.name}`}} url={`/lists/${list.name}`} key={`cBcR${list.name}`} />)}
      </section>
      {/* <Link to={`/`}>
        <BsArrowUpCircleFill className='up_icon' />
      </Link> */}
    </>
  )
};
export default Home;