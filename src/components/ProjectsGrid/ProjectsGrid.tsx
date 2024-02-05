import React from "react";
import Grid from '@mui/material/Grid';
import ProjectCard from "../ProjectCard/ProjectCard";
import plantStoreImage from "../../assets/projects-images/plant-store.png";
import flashCardsImage from "../../assets/projects-images/front-end-flashcards.png";
import drumMchineImage from "../../assets/projects-images/drum_machine.png";
import calculatorImage from "../../assets/projects-images/react_calculator.png";
import weatherAppImage from "../../assets/projects-images/local_weather_app.png";
import pomodoroClockImage from "../../assets/projects-images/pomodoro_clock.png";
import quoteGeneratorImage from "../../assets/projects-images/quote_generator.png";


const projectData = [
  {
    title:"Online Plant Shop",
    link:"https://annatyrka.github.io/product-landing-page/",
    image: plantStoreImage,
    description:"Interactive and responsive website of an online plant shop",
    sourceCode:"https://github.com/annatyrka/product-landing-page", 
    techIcons: ["JavaScript", "HTML", "CSS"]
  },
  {
    title:"Front End Flashcards",
    link:"https://annatyrka.github.io/front-end-flashcards/",
    image: flashCardsImage,
    description:"App that helps a user learn key concepts of front-end development",
    sourceCode:"https://github.com/annatyrka/front-end-flashcards",
    techIcons: ["React", "JavaScript", "MUI"]
  },
  {
    title:"Drum Machine",
    link:"https://annatyrka.github.io/drum-machine/",
    image: drumMchineImage,
    description:"Drum Machine is a virtual instrument featuring imitations of various sounds",
    sourceCode:"https://github.com/annatyrka/drum-machine",
    techIcons: ["React", "JavaScript", "MUI"]
  },
  {
    title:"Calculator",
    link:"https://annatyrka.github.io/react-calculator/",
    image: calculatorImage,
    description:"Simple calculator built with React & JavaScript",
    sourceCode:"https://github.com/annatyrka/react-calculator",
    techIcons: ["React", "JavaScript", "Sass"]
  },
  {
    title:"Local Weather App",
    link:"https://annatyrka.github.io/local-weather-app/",
    image: weatherAppImage,
    description:"App that shows the current weather based on user's location",
    sourceCode:"https://github.com/annatyrka/local-weather-app",
    techIcons: ["React", "JavaScript", "MUI"]
  },
  {
    title:"Pomodoro Clock",
    link:"https://annatyrka.github.io/pomodoro-clock/",
    image: pomodoroClockImage,
    description:"Productivity app that helps you stay focused and work effectively",
    sourceCode:"https://github.com/annatyrka/pomodoro-clock",
    techIcons: ["React", "JavaScript", "MUI"]
  },
  {
    title:"Quote Generator",
    link:"https://annatyrka.github.io/random-quote-machine/",
    image: quoteGeneratorImage,
    description:"App that fetches a random quote and its author",
    sourceCode:"https://github.com/annatyrka/random-quote-machine",
    techIcons: ["React", "JavaScript", "MUI"]
  }
]

const techIconsImg = [
  {
    title: "JavaScript",
    img: "https://img.icons8.com/color/48/000000/javascript--v1.png"
  },
  {
    title: "CSS",
    img: "https://img.icons8.com/color/48/000000/css3.png"
  },
  {
    title: "Sass",
    img: "https://img.icons8.com/color/48/000000/sass.png"
  },
  {
    title: "HTML",
    img: "https://img.icons8.com/color/48/000000/html-5--v1.png"
  },
  {
    title: "React",
    img: "https://img.icons8.com/color/48/000000/react-native.png"
  },
  {
    title: "MUI",
    img: "https://img.icons8.com/color/48/000000/material-ui.png"
  }
]


const ProjectsGrid = () => (

  <Grid container 
  direction="row"
  width='100%'
 
  justifyContent="center"
  alignItems="center"
  rowSpacing={4} columnSpacing={{ xs: 4 }}


  >
         
         {projectData.map(project => {
            const {title, link, image, description, sourceCode, techIcons} = project
            let icons:any[] = []
            techIcons.forEach(techIcon => {
            for (let i=0; i< techIconsImg.length; i++ ) {
              if (techIconsImg[i].title === techIcon) {
                icons.push(techIconsImg[i])
              }
            }
          })
           return (
            <Grid item  key={title} >
              <ProjectCard
                title={title}
                link={link}
                image={image}
                description={description}
                sourceCode={sourceCode}
                key={title}
                techIcons={icons}
          />      
             </Grid> )
    })}


  </Grid>
)

export default ProjectsGrid;