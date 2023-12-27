import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/base/Button';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/system';
import Hidden from '@mui/material/Hidden';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

 const headerStyle = () => ({
  position: 'sticky',
  background: 'radial-gradient(circle, rgba(40,28,76,1) 0%, rgba(16,16,26,1) 100%)',
  maxWidth: "1920px",
  width: "100%",
  padding: "0",
  mx: "auto"
})


const navItems = ['projects', 'about', 'contact'];


const CustomButton = styled(Button)`
  font-size: 1.125rem;
  background-color: none;
  font-family: "proxima nova light", "Helvetica Neue", Helvetica, Arial, sans-serif;
  padding: 12px 24px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  text-decoration: none;
  display: inline-block;
  position: relative;

  &:hover::after {
    text-decoration: underline;
    transform: scaleX(0.9);
    transform-origin: bottom left;
  }

  &::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: rgb(24, 190, 174);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
  }

`;

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    background: radial-gradient(circle, rgba(40,28,76,1) 0%, rgba(16,16,26,1) 100%); 
    width: 50%;
    `

const StyledIconButton = styled(IconButton)`
  color: white;
`;

const StyledListItemText = styled(ListItemText)`
color: white;

`
const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen:boolean) => () => {
    setOpen(isOpen);
  };

  return (
    <div>
      <StyledIconButton color='secondary' onClick={toggleDrawer(true)}>
        <MenuIcon />
      </StyledIconButton>
      <StyledDrawer anchor="top" open={open} onClose={toggleDrawer(false)}>
        <List>
          {/* Add your menu items here */}
          {navItems.map((item, key) => (
                  <ListItem key={item}>
                    <StyledListItemText primary={item.charAt(0).toUpperCase() + item.slice(1)} />
                  </ListItem>
          ))}
        </List>
      </StyledDrawer>
    </div>
  );
};



const Header = () => (
      <AppBar sx={headerStyle} >
        <Toolbar disableGutters sx= {{height: 85, display: 'flex', justifyContent: 'space-around', alignItems:'center'}}>
          <Box   sx={{  padding: 1, width:1/6, display: 'flex', justifyContent: 'space-around'}} >
            <CustomButton href="#" >
                  Home
            </CustomButton>
          </Box>
            <Hidden smDown>
             <Box   sx={{   padding: 1,  display: 'flex', justifyContent: 'space-around', width:1/3 }}>
            {navItems.map((item) => (
              <CustomButton  href={`#${item}`} key={item} >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </CustomButton>
            ))}
             </Box>   
            </Hidden>
            <Hidden smUp>
             <HamburgerMenu />
            </Hidden>
            <Hidden smDown>
              <Box   sx={{  padding: 1,  display: 'flex',  justifyContent: 'space-around', width:1/6, }}>
                <IconButton href='https://github.com/annatyrka' target="_blank" color="inherit"><GitHubIcon fontSize="large"/> </IconButton>
                <IconButton href='https://linkedin.com/in/annatyrka' target="_blank" color="inherit">     <LinkedInIcon fontSize="large"/> </IconButton>
                <IconButton href='mailto:a.m.tyrka@gmail.com' target="_blank" color="inherit">  <EmailIcon fontSize="large"/> </IconButton>
              </Box>
            </Hidden>
        </Toolbar>
      </AppBar>

  );


export default Header;