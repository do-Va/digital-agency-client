import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllMenus } from './redux/home/menuSlice';
import { getHero } from './redux/home/heroSlice';
import { getAbout } from './redux/home/aboutSlice';
import { getAllOurTeams } from './redux/home/ourTeamSlice';

import Home from './pages/Home';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMenus('/menus'));
    dispatch(getHero('/hero'));
    dispatch(getAbout('/about'));
    dispatch(getAllOurTeams('/our-teams'));
  }, [dispatch]);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
