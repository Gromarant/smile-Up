import Avatar from '../../baseComponents/Avatar/Avatar';
import Card from '../../baseComponents/Card/Card';
import { useEffect, useState } from 'react';
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
      <p>LuisR@gmail.com</p>
      <span>Icon crear lista</span>
      <section className='userList_section'>
        {lists && lists?.map(list => <Card content={{"name": `${list.name}`}} key={`cBcR${list.name}`} />)}
      </section>
    </>
  )
};
export default Home;