import Box from '@mui/material/Box';
import ProjectsGrid from "../ProjectsGrid/ProjectsGrid";
import SectionTitle from '../SectionTitle/SectionTitle';

const containerStyles = (theme:any) => ({
  display:'flex',
  flexDirection: "column",
  flexWrap: 'nowrap',
  paddingTop: "50px",
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(90deg, rgba(5,8,16,1) 0%, rgba(0,0,0,1) 50%)',
  // [theme.breakpoints.up('xl')]: {
  //   // paddingLeft: "200px",
  // },
  })


const ProjectsContainer = () => (
  <Box sx={containerStyles} id="projects">
    <SectionTitle section="Projects"/>
    <ProjectsGrid  />
  </Box>
)

export default ProjectsContainer;