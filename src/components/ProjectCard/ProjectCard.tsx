import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from "react";
import Card from '@mui/material/Card';
import { CardMedia, CardContent, CardActions, Typography, Button, Grid } from "@mui/material";
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import './ProjectCard.styles.scss';

const cardStyles = {
  display: 'flex',
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem 1.5rem",
  borderRadius: "5px",
  // color: "#f0f0f0",
  color: 'white',
  width: "325px",
  backgroundColor: "#131212",
  boxShadow: "-10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, -11px -22px 23px 0px rgba(0, 0, 0, 0)"
}

const imageStyles = {
  objectFit: 'cover',
  borderRadius: "0.5rem",
  margin: '0 auto',
  height: "10rem",
  width: "17rem",
  padding: 0,
  '&:hover': {
    transitionDuration: "0.5s",
    transitionProperty: "transform",
    transitionTimingFunction: "ease-in-out",
    transform: "scale(1.05)"
    },
    '&:not(:hover)': {
      transitionDuration: "0.5s",
      transitionProperty: "transform",
      transitionTimingFunction: "ease-in-out",
      transform: "scale(1)"
      }
}
const projectDescrptionStyles = {
  paddingTop: "1rem",
  fontSize: "0.9rem",
  fontWeight: "300",
  left: "-30%"
}

const cardActionStyles = {
  display: "flex",
  width: "100%",
  padding: 0,
  height: "70px",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center"
}

const buttonStyles = {
  fontSize: "0.75rem",
  fontWeight: "300",
  padding: "5px",
  width: "45%",
  '&:hover': {
color: "rgb(24, 190, 174)"
}
}

const projectIconsStyles = {
  width: "40%",
}

const iconWrapStyles = {
  position: "relative",
  '&:hover': {
    cursor: "pointer"
  }
}

const iconDescriptionStyles = {
  position: "absolute",
  top: "0px",
  left: "0px",
  bottom: "21px",
  fontSize: "0.7rem",
  opacity:"0",
  color: "white",
  background: "rgba(97, 97, 97, 0.9)",
  transform: "translateY(-60%)",
  transition: "opacity 200ms",
  borderRadius: "4px",
  padding: "2px 6px",
    '&:hover': {
    opacity:"1",
  }
}

const ProjectCard = ({ title, link, sourceCode, image, description, techIcons }:any) => (

  <Card sx={cardStyles}>
  
    <Typography variant="h6" fontWeight={300}>{title}</Typography>
    <CardContent>
      <Link href={link} target="_blank" rel="noopener">
        <CardMedia
        component="img"
        alt={title}
        image={image}
        sx={imageStyles}
        />
      </Link>
      <Typography variant="body2" align="center" sx={projectDescrptionStyles}>{description}</Typography>
    </CardContent>
    <CardActions sx={cardActionStyles}>
      <Button sx={buttonStyles} variant="outlined" size="small" href={sourceCode} startIcon={<GitHubIcon />} color="inherit" >Source Code</Button>
        <Grid container spacing={0.5} sx={projectIconsStyles}>
        {techIcons.map((icon: any, i: number) => (
       

            <Grid item xs={4} key={i} sx={iconWrapStyles}  className="iconWrap">
                <Typography
                  title={icon.title}
                  sx={iconDescriptionStyles}
                  className="iconDescription"      
                >{icon.title}</Typography>
                <img
                  src={icon.img}
                  alt={icon.title}
                  height="35px"
                  loading="lazy"
                />

            </Grid>
 
        ))}
        </Grid>
    </CardActions>
  </Card>
)

export default ProjectCard;