import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SectionTitle from '../SectionTitle/SectionTitle';
import SkillCard from '../SkillCard/SkillCard';


  const techIcons = [
    {
      title: "JavaScript",
      img: require('../../assets/icons/icons8-javascript-96.png')
    },
    {
      title: "TypeScript",
      img: require('../../assets/icons/icons8-typescript-48.png')
    },
    {
      title: "React",
     img: require('../../assets/icons/icons8-react-a-javascript-library-for-building-user-interfaces-96.png')

    },
    {
      title: "HTML",
     img: require('../../assets/icons/icons8-html-96.png')

    },
    {
      title: "CSS",
     img: require('../../assets/icons/icons8-css-96.png')

    },
    {
      title: "Sass",
     img: require('../../assets/icons/icons8-sass-96.png')

    },
    {
      title: "MUI",
     img: require('../../assets/icons/icons8-material-ui-48.png')

    },
    {
      title: "Node.js",
     img: require('../../assets/icons/icons8-node-js-96.png')

    },
    {
      title: "MongoDB",
     img: require('../../assets/icons/output-onlinepngtools (2).png')

    },
    {
      title: "Kafka",
     img: require('../../assets/icons/kafka - White on Transparent.png')

    },
    {
      title: "Docker",
     img: require('../../assets/icons/01-symbol_blue-docker-logo.png')

    },
    {
      title: "git",
     img: require('../../assets/icons/Git-Icon-1788C.png')

    },
    {
      title: "GitHub",
     img: require('../../assets/icons/github-mark-white.png')

    },
    {
      title: "WordPress",
     img: require('../../assets/icons/icons8-wordpress-100.png')

    }
  ]

  const containerStyles = (theme:any) => ({
    display:'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    padding: "2rem 4rem",
    paddingBottom: "100px",
    background: 'linear-gradient(90deg, rgba(5,8,16,1) 0%, rgba(0,0,0,1) 50%)',
    [theme.breakpoints.down('sm')]: {
      padding: "25px",
    },
    })
  
    const skillsGridStyles = (theme:any) => ({
      gridTemplateColumns: 'repeat(4, 150px)',
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: "1.5rem",
      [theme.breakpoints.up('md')]: {
        width: "85%",
      },
      [theme.breakpoints.up('lg')]: {
        width: "1000px",
      },
      })

const SkillsContainer = () => (
  <Box sx={containerStyles}>
    <SectionTitle section="Skills"/>
    <Grid container gap={3} sx={skillsGridStyles}>
    {techIcons.map(techIcon => {
      const { title, img } = techIcon
      return (
        <Grid item lg={2.5} key={title} padding={0}>
          <SkillCard skill={title} image={img} />
        </Grid>
      )
    })}
    </Grid>
    </Box>
)

export default SkillsContainer;