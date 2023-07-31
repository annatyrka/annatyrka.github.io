import Box from '@mui/material/Box';
import ProjectsGrid from "../ProjectsGrid/ProjectsGrid";
import SectionTitle from '../SectionTitle/SectionTitle';

const containerStyles = {
  display:'flex',
  flexDirection: "column",
  flexWrap: 'nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(90deg, rgba(5,8,16,1) 0%, rgba(0,0,0,1) 50%)'
  }



const ProjectsContainer = () => (
  <Box sx={containerStyles}>
    <SectionTitle section="Projects"/>
    <ProjectsGrid />
  </Box>
)

export default ProjectsContainer;