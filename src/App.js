import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Home from './pages/Home';

import {
  getAbout,
  getAllMenus,
  getAllOurTeams,
  getAllOurWorks,
  getAllServiceList,
  getAllTestimonials,
  getHero,
  getService,
} from './redux/home';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMenus('/menus'));
    dispatch(getHero('/hero'));
    dispatch(getAbout('/about'));
    dispatch(getService('/service'));
    dispatch(getAllServiceList('/service/list'));
    dispatch(getAllOurTeams('/our-teams'));
    dispatch(getAllOurWorks('/our-works'));
    dispatch(getAllTestimonials('/testimonial'));
  }, [dispatch]);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
