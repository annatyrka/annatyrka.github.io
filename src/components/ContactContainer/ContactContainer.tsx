import Box from '@mui/material/Box';
import SectionTitle from '../SectionTitle/SectionTitle';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

  const containerStyles = (theme:any) => ({
    display:'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    padding: "2rem 2.5rem",
    // background: 'linear-gradient(90deg, rgba(5,8,16,1) 0%, rgba(0,0,0,1) 50%)',
    background:"#131212",
    [theme.breakpoints.down('sm')]: {
      padding: "5px",
    },
    })
  
    const contactLinksStyles = (theme:any) => ({
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#FFFFFF',
      [theme.breakpoints.up('md')]: {
        width: "90%",
      },
      [theme.breakpoints.up('lg')]: {
        width: "1100px",
      },
      })

      const sxgIconsStyles = {
        transform: "scale(1.7)",
        paddingRight:" 0.5rem"
      }

      const CustomButton = styled(Button)`
          font-size: 2rem;
          font-weight: 300;
          margin: 2rem;
          background-color: none;
          color: white;
          cursor: pointer;
          border: none;
          text-decoration: none;
          text-transform: none;
          
          &:hover {
            background-color: inherit;
            transform: translateY(5px);
            transition: transform ease-out 0.3s
          }

          &:not(:hover) {
            background-color: inherit;
            transform: translateY(0px);
            transition: transform ease-out 0.3s
          }
`;

const ContactContainer = () => (
  <Box sx={containerStyles} id="contact">
    <SectionTitle section="Contact"/>
    <Box sx={contactLinksStyles}>
    <CustomButton  href='https://github.com/annatyrka'  startIcon={<GitHubIcon sx={sxgIconsStyles}  />}  >
       GitHub
    </CustomButton>
    <CustomButton   href='https://linkedin.com/in/annatyrka' startIcon={<LinkedInIcon sx={sxgIconsStyles}  />}>
    LinkedIn
    </CustomButton>
    <CustomButton  href='mailto:a.m.tyrka@gmail.com' startIcon={<EmailIcon sx={sxgIconsStyles}  />}>
    Email
    </CustomButton>
    </Box>
    </Box>
)

export default ContactContainer;