import Box from '@mui/material/Box';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Typography } from '@mui/material';



  const containerStyles = (theme:any) => ({
    display:'flex',
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    padding: "3rem",
    background: 'linear-gradient(90deg, rgba(5,8,16,1) 0%, rgba(0,0,0,1) 50%)',
    [theme.breakpoints.down('sm')]: {
      padding: "5px",
    },
    })
  
    const aboutMeTextStyles = (theme:any) => ({
      display:'flex',
      justifyContent: 'center',
      flexDirection: "column",
      alignItems: 'center',
      padding: "1.5rem",
      borderRadius: "7px",
      color: 'white',
      [theme.breakpoints.up('md')]: {
        width: "90%",
      },
      [theme.breakpoints.up('lg')]: {
        width: "900px",
      },
      })

    const underlined =(theme:any) => ({
        position: "relative",
        '&:after': {
          content: '""',
          position: "absolute",
          bottom: "-20px",
          left: 0,
          height: "7px",
          width: "100%",
          border: "solid 3px #FF6EC7",
          borderColor: "#FF6EC7 transparent transparent transparent",
          borderRadius: "50%",
          transform: "rotate(-0.5deg)",
          // clipPath: "inset(0 0 50% 0)"
        },
        [theme.breakpoints.down('md')]: {
          fontSize: "1.5rem"
        },
      })

const AboutContainer = () => (
  <Box sx={containerStyles} id="about">
    <SectionTitle section="About me"/>
    <Box sx={aboutMeTextStyles}>
        <Typography fontWeight={300} textAlign='center' fontSize="1.5rem" letterSpacing="1px"   marginBottom={3}>I'm Anna, a full stack engineer who loves bringing ideas to life through code. From crafting front-end interfaces to diving into the intricacies of back-end logic, I'm here to create meaningful digital experiences.</Typography>
        <Typography textAlign='center' fontSize="2rem" paddingTop={3.5} letterSpacing="1px"  sx={underlined}> Let's build something amazing together!</Typography>
    </Box>
    </Box>
)

export default AboutContainer;