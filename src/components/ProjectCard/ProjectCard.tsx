import React from "react";
import Card from '@mui/material/Card';
import { Box, CardMedia, CardContent, CardActions, Typography, Button, ImageList, ImageListItem } from "@mui/material";
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
const cardStyles = {
  display: 'flex',
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "1.25rem",
  borderRadius: "5px",
  color: "#f0f0f0",
  fontWeight: "light",
  backgroundColor: "#131212",
  boxShadow: "-10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, -11px -22px 23px 0px rgba(0, 0, 0, 0)"
}

const imageStyles = {
  objectFit: "cover",
  borderRadius: "0.5rem",
  marginBottom: "1rem"
}

const cardActionStyles = {
  display: "flex",
  width: "100%",
  padding: "20px",
  height: "100px",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center"
}

const buttonStyles = {
  '&:hover': {
color: "rgb(24, 190, 174)"
}
}
const iconWrap = {
  position: "relative",
  overflow: "hidden",
  border: "3px solid #73AD21"
}

const iconDescription = {
  position: "absolute",
  top: "0px",
  left: "0px",
  bottom: "0px",
  fontSize: "0.75rem",
  opacity:"1",
  background: "rgba(97, 97, 97, 0.9)",
  transform: "translateY(-70%)",
  transition: "opacity 200ms",
  marginBottom: "0px",
  borderRadius: "4px",
  display: "inline",
  zIndex: "3",
    '&:hover': {
    opacity:"1",
  }
}

const ProjectCard = ({ title, link, sourceCode, image, description, techIcons }:any) => (

  <Card sx={cardStyles}>
  
    <Typography variant="h6">{title}</Typography>
    <CardContent>
      <Link href={link}>
        <CardMedia
        component="img"
        alt={title}
        image={image}
        sx={imageStyles}
        />
      </Link>
      <Typography>{description}</Typography>
    </CardContent>
    <CardActions sx={cardActionStyles}>
      <Button sx={buttonStyles} variant="outlined" size="small" href={sourceCode} startIcon={<GitHubIcon />} color="inherit" >Source Code</Button>
      <ImageList sx={{ width: 120, height: 50 }} cols={3} rowHeight={50}>
        {techIcons.map((icon: any) => (
          <Box sx= {iconWrap}>
            <Typography sx={iconDescription}>{icon.title}</Typography>
            <ImageListItem key={icon.img} sx={{height: "20px", position: "absolute"}} 
            >
                <img
                src={icon.img}
                // srcSet={`${icon.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={icon.title}
                loading="lazy"
                />
            </ImageListItem>
          </Box>
        ))}
      </ImageList>
    </CardActions>
  </Card>
)

export default ProjectCard;