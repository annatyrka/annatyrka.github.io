import React from 'react';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import HomepageContainer from './components/HomepageContainer/HomepageContainer';
import ProjectsContainer from './components/ProjectsContainer/ProjectsContainer';
import SkillsContainer from './components/SkillsContainer/SkillsContainer';
import AboutContainer from './components/AboutContainer/AboutContainer';
import ContactContainer from './components/ContactContainer/ContactContainer';
import Footer from './components/Footer/Footer';

const App = () => 
(
  <div>
   <Header />
   <Container>
      <HomepageContainer />
      <ProjectsContainer />
      <AboutContainer />
      <SkillsContainer />
      <ContactContainer />
      <Footer />

  </Container>
  {/* <Footer /> */}
  </div>

)

  

export default App;
