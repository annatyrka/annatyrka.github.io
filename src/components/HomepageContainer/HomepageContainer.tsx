import React from "react";
import CardMedia from '@mui/material/CardMedia';
import imageBg from '../../assets/pawel-czerwinski-z7prq6BtPE4-unsplash.jpg';
import { Box, Typography } from "@mui/material";

const containerStyles = {
  display:'flex',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'linear-gradient(90deg, rgba(5,8,16,1) 0%, rgba(0,0,0,1) 50%)'
  }

const boxStyles = {
  flexGrow: 1,
  color: 'white',
  zIndex: 1,
}

const imageStyles = {
  flexGrow: 1,
  opacity: '0.4',
  marginTop: 9,
  height: '95vh',
  width: '60vw',
  zIndex:1,
  objectFsit: 'contain',
  animation: "image-in 1.5s cubic-bezier(0.5, 0, 0.1, 1) 2s backwards",

"@keyframes image-in": {
    "from": {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"
    },
    "to": {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
    }
  }
}

const nameStyles = {
  display: 'inline-block;',
  paddingLeft: 17,
  fontFamily: "Poppins, sans-serif",
  fontSize: "4vw",
  zIndex: 3,
  letterSpacing: "3px",
  animation: 'inner-left 1s 1s ease both, text-clip 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both',
  "@keyframes inner-left": {
    "from":{
      transform: "translateX(50%)"
    },
    "to": {
      transform: "none"
    }
  }
}




const textOuterStyles = {
  display: "inline-block",
  background: "none",
  animation:"inner-left 1s 1s ease both",
  "@keyframes inner-left": {
    "from": {
      transform: "translateX(-50%)"
    },
    "to": {
      transform: "none"
    }
  }
}

const nameOuterStyles = {
  background: "none",
  animation: 'outer-left 1s 1s cubic-bezier(0.5, 0, 0.1, 1) both',
  "@keyframes outer-left": {
    "from": {
      transform: "translateX(50%)"
    },
    "to": {
      transform:"none"
    }
  }
}

const titleOuterStyles = {
  background: "none",
  animation: 'outer-left 1s 1s cubic-bezier(0.5, 0, 0.1, 1) both',
  "@keyframes outer-left": {
    "from": {
      transform: "translateX(50%)"
    },
    "to": {
      transform:"none"
    }
  }
}

const titleStyles={
  animation: "text-clip 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both",
  animationDelay: "0.75s",
  paddingLeft: 17,
  fontFamily: "Prata",
  color: "#18beae",
  fontSize: "2.9vw",
  zIndex: 3,
  letterSpacing: "3px",

  "@keyframes text-clip": {
    "from": {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
    },
    "to": {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
    }
  }
}

const HomepageContainer = () => (
  <Box  sx={containerStyles}>
    <Box  display='inline-block' sx={{...boxStyles, width: '40vw' }}>
     <Box sx={textOuterStyles} >
      <Box sx={nameOuterStyles}>     
          <Typography sx={nameStyles}>ANNA TYRKA</Typography>
      </Box>
      <Box sx={titleOuterStyles}>
        <Typography sx={titleStyles}>Full-Stack Engineer</Typography>
      </Box>
      </Box>
    </Box>

      <CardMedia component="img" src={imageBg} sx={imageStyles}  />

  </Box>

)


export default HomepageContainer