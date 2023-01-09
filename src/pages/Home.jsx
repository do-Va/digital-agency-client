import styled from 'styled-components/macro';
import {
  About,
  ContactUs,
  Copyright,
  Footer,
  Header,
  Hero,
  NewsLetter,
  OurTeam,
  OurWork,
  Services,
  Testimonial,
} from '../components';

const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <Hero />
      <About />
      <Services />
      <OurTeam />
      <OurWork />
      <Testimonial />
      <ContactUs />
      <NewsLetter />
      <Footer />
      <Copyright />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.main`
  min-height: 100%;
`;

export default Home;
