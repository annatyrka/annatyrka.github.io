import React from 'react';
import Card from '@mui/material/Card';
import { CardMedia, CardContent, Typography } from "@mui/material";


const cardStyles = (theme:any) => (
  {display: 'flex',
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem 1.5rem",
  color: "#f0f0f0",
  width: "150px",
  backgroundColor: "#131212",
  boxShadow: "-10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000, -11px -22px 23px 0px rgba(0, 0, 0, 0)",
  [theme.breakpoints.down('sm')]: {
    width: "135px",
  },
  '& .MuiCardContent-root:last-child': {
    paddingBottom: '16px',
  }
}
)

const imageStyles = (theme:any) => ({
  paddingLeft: "1rem",
  width: "45px",
  [theme.breakpoints.down('sm')]: {
    width: "35px",
  }
})


// interface SkillCardProps {
//   skill: string;
//   image: string;
// }

const SkillCard = ({ skill, image }: any ) => (
  <Card sx={cardStyles}>
      <CardMedia
        component="img"
        alt={skill}
        image={image}
        sx={imageStyles}
      />
       <CardContent>
        <Typography  fontSize="1.125rem" >
          {skill}
        </Typography>
      </CardContent>
  </Card>
)

export default SkillCard;