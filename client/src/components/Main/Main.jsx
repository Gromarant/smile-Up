import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Search from '../pages/Search/Search';
import CreateList from '../pages/CreateList/CreateList';
import ListDetails from '../pages/ListDetails/ListDetails';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<CreateList />} />
        <Route path='/search' element={<Search />} />
        <Route path='/lists/:name' element={<ListDetails />} />
        <Route path='/lists/:name/edit' element={<Search />} />
      </Routes>
    </main>
  );
};

export default Main;