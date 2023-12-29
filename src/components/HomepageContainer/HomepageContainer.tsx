import React from "react";
import CardMedia from '@mui/material/CardMedia';
import imageBg from '../../assets/pawel-czerwinski-z7prq6BtPE4-unsplash.jpg';
import { Box, Typography } from "@mui/material";

const containerStyles = (theme:any) => ({
  display:'flex',
  flexWrap: 'nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  objectFit: 'contain',
  background: 'linear-gradient(90deg, rgba(5,8,16,1) 0%, rgba(0,0,0,1) 50%)',
  [theme.breakpoints.down('sm')]: {
    height: '100vh',
  },
  })

const boxStyles = {
  flexGrow: 1,
  color: 'white',
  zIndex: 1,
}

const imageStyles = (theme:any) => ({
  flexGrow: 1,
  opacity: '0.4',
  marginTop: 0,
  height: '95vh',
  width: '50%',
  zIndex:1,
  animation: "image-in 1.5s cubic-bezier(0.5, 0, 0.1, 1) 2s backwards",

"@keyframes image-in": {
    "from": {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"
    },
    "to": {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
    }
  },
  [theme.breakpoints.down('sm')]: {
    display: "none",
  },
  [theme.breakpoints.up('xl')]: {
    width: '60%',
  },
})

const nameStyles = (theme:any) =>({
  display: 'inline-block;',
  paddingLeft: 17,
  fontFamily: "Poppins, sans-serif",
  fontSize: "4rem",
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
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "3.5rem",
    textAlign: "center",
    padding: "1rem"
  },
    [theme.breakpoints.up('xl')]: {
      fontSize: "4.5rem",
    },

})

const titleStyles= (theme:any) => ({
  animation: "text-clip 1s 0s cubic-bezier(0.5, 0, 0.1, 1) both",
  animationDelay: "0.75s",
  paddingLeft: 17,
  fontFamily: "Prata",
  color: "#18beae",
  fontSize: "3rem",
  zIndex: 3,
  letterSpacing: "3px",

  "@keyframes text-clip": {
    "from": {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)"
    },
    "to": {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
    }
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: "2.5rem",
    textAlign: "center",
    padding: "1rem"
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: "3.5rem",
  },
})



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

const textBoxStyles = (theme:any) => ({

  width: '40vw',
  [theme.breakpoints.down('sm')]: {
    width: '100vw',
    // alignText: "center",
    zIndex: 3
  },
})


const HomepageContainer = () => (
  <Box  sx={containerStyles}>
    <Box  display='inline-block' sx={{textBoxStyles, ...boxStyles}}>
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