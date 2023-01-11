import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllMenus } from './redux/home/menuSlice';

import Home from './pages/Home';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMenus('/menus'));
  }, [dispatch]);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
