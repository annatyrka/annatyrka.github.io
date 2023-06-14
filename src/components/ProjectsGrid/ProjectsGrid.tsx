import React from "react";
import Grid from '@mui/material/Grid';
import ProjectCard from "../ProjectCard/ProjectCard";
import imageBg from '../../assets/projects-images/plant-store.png';

const projectData = [
  {
    titl:"Online Plant Shop",
    link:"https://annatyrka.github.io/product-landing-page/",
    image:"../../assets/project-images/plant-store.png",
    description:"Interactive and responsive website of an online plant shop"
  }
]
const ProjectsGrid = () => (
  <Grid container spacing={2}>
         <Grid item xs={4}>
          <ProjectCard
            title="Online Plant Shop"
            link="https://annatyrka.github.io/product-landing-page/"
            image={imageBg}
            description="Interactive and responsive website of an online plant shop"
            sourceCode="https://github.com/annatyrka/product-landing-page"
            techIcons={[{title: "JavaScript", img: "https://img.icons8.com/color/48/000000/javascript--v1.png"}, 
          {title: "CSS", img: "https://img.icons8.com/color/48/000000/css3.png"}, {title: "HTML", img: "https://img.icons8.com/color/48/000000/html-5--v1.png"}]}
           />   
   </Grid>

  </Grid>
)

export default ProjectsGrid;