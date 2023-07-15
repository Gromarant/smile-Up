import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Search from '../pages/Search';
import CreateList from '../pages/CreateList/CreateList';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreateList />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </main>
  );
};

export default Main;