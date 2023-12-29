import Box from '@mui/material/Box';
import SectionTitle from '../SectionTitle/SectionTitle';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';

  const containerStyles = (theme:any) => ({
    display:'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    padding: "2rem 2.5rem",
    background:"#131212",
    [theme.breakpoints.down('sm')]: {
      padding: "25px",
    },
    })
  
    const contactLinksStyles = (theme:any) => ({
      gridTemplateColumns: 'repeat(3, 1fr)',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#FFFFFF',
      [theme.breakpoints.down('lg')]: {
        width: "90%",
      },
      [theme.breakpoints.up('lg')]: {
        width: "1100px",
      },
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
      })

      const sxgIconsStyles = (theme: any) => ({
        transform: "scale(1.7)",
        paddingRight:" 0.5rem",
        [theme.breakpoints.down('sm')]: {
          transform: "scale(1.5)",
        },
      })

      const CustomButton = styled(Button)(({ theme }) => ({
          fontSize: '2rem',
          fontWeight:' 300',
          margin: '0.5rem 2rem',
          backgroundColor: 'none',
          color:'white',
          cursor: 'pointer',
          border: 'none',
          textDecoration: 'none',
          textTransform: 'none',
          
         '&:hover': {
            backgroundColor: 'inherit',
            transform: 'translateY(5px)',
            transition: 'transform ease-out 0.3s'
          },

         '&:not(:hover)': {
            backgroundColor: 'inherit',
            transform: 'translateY(0px)',
            transition: 'transform ease-out 0.3s'
          },
          [theme.breakpoints.down('md')]: {
            fontSize: '1.625rem',
            marginTop: 0
          },
        }))
;

const ContactContainer = () => (
  <Box sx={containerStyles} id="contact">
    <SectionTitle section="Contact"/>
    <Grid container gap={3} sx={contactLinksStyles}>
      <CustomButton  href='https://github.com/annatyrka'  startIcon={<GitHubIcon sx={sxgIconsStyles}  />}  >
        GitHub
      </CustomButton>
      <CustomButton   href='https://linkedin.com/in/annatyrka' startIcon={<LinkedInIcon sx={sxgIconsStyles}  />}>
      LinkedIn
      </CustomButton>
      <CustomButton  href='mailto:a.m.tyrka@gmail.com' startIcon={<EmailIcon sx={sxgIconsStyles}  />}>
      Email
      </CustomButton>
    </Grid>
  </Box>
)

export default ContactContainer;