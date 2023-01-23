import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Home, Error } from './pages';

import {
  getAbout,
  getAllMenus,
  getAllOurTeams,
  getAllOurWorks,
  getAllServiceList,
  getAllTestimonials,
  getHero,
  getService,
  getContactUs,
  getNewsLetter,
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
    dispatch(getContactUs('/contact-us'));
    dispatch(getNewsLetter('/newsletter'));
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
