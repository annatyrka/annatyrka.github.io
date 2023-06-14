import React from 'react';
import Header from './components/Header/Header';
import Container from './components/Container/Container';
import HomepageContainer from './components/HomepageContainer/HomepageContainer';
import ProjectsContainer from './components/ProjectsContainer/ProjectsContainer';
const App = () => 
(
  <div>
   <Header />
   <Container>
    <HomepageContainer />
    <ProjectsContainer />
    </Container>
  </div>

)

  

export default App;
