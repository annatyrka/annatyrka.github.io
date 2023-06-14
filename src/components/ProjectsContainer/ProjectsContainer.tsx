import React from "react";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import ProjectsGrid from "../ProjectsGrid/ProjectsGrid";


const containerStyles = {
  display:'flex',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(90deg, rgba(5,8,16,1) 0%, rgba(0,0,0,1) 50%)'
  }

const ProjectsContainer = () => (
  <Box sx={containerStyles}>
    <Typography>Projects</Typography>
    <ProjectsGrid />
  </Box>
)

export default ProjectsContainer;