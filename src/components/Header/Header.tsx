import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/base/Button';
import { styled } from '@mui/system';

 const headerStyle = () => ({
  background: 'radial-gradient(circle, rgba(40,28,76,1) 0%, rgba(16,16,26,1) 100%)',

})
const navItems = ['Projects', 'About', 'Contact'];

const blue = {
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
};

const CustomButton = styled(Button)`
  font-size: 1.125rem;
  background-color: none;
  font-family: "proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding: 12px 24px;
  border-radius: 12px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  text-decoration:none;

  &:hover {
    color: ${blue[500]};
  }
`;
const Header = () => (
 
      <AppBar component="nav" sx ={headerStyle}>
        <Toolbar sx= {{height: 85, display: 'flex', justifyContent: 'space-around', alignItems:'center'}}>
          <Box   sx={{  padding: 1, width:1/6, display: 'flex', justifyContent: 'space-around'}} >
            <CustomButton href="#text-buttons"  >
              Home
            </CustomButton>
          </Box>

          <Box   sx={{   padding: 1,  display: 'flex', justifyContent: 'space-around', width:1/3 }}>
            {navItems.map((item) => (
              <CustomButton  href="#text-buttons" key={item} >
                {item}
              </CustomButton>
            ))}
          </Box>

          <Box   sx={{  padding: 1,  display: 'flex',  justifyContent: 'space-around', width:1/6 }}>
             <GitHubIcon fontSize="large"/>
             <LinkedInIcon fontSize="large"/>
             <EmailIcon fontSize="large"/>
          </Box>
        </Toolbar>
      </AppBar>

  );


export default Header;