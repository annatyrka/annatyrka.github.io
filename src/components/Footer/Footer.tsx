import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Copyright() {
  return (
    <Typography variant="body1" color="white" fontWeight={100}>
      {'Copyright © '} Anna Tyrka {' '} {new Date().getFullYear()}.  All rights reserved.
    </Typography>
  );
}

const footerStyles = (theme: any) => ({
  borderWidth: "3px 0 0 0",
  borderImage: "linear-gradient(to right, red, purple) 1;",
  borderStyle: "solid",
  backgroundColor: "#131212",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  paddingRight: "4rem",
  [theme.breakpoints.down('md')]: {
    justifyContent: "center",
    paddingRight: "1rem",  },
})

export default function Footer() {
  return (
          <Box  sx={footerStyles}  component="footer" >
            <Copyright />
          </Box>
  );
}

