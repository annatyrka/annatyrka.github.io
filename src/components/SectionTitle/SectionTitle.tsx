import { Typography } from "@mui/material";

const sectionTitleStyles = {
  color: "rgb(24, 190, 174)",
  textTransform: "uppercase",
  margin: "3rem",
  textAlign: "center",
  letterSpacing: "3px",
}
const SectionTitle = ({section}: any) => {
  return (
    <Typography variant="h4" sx={sectionTitleStyles}>{section}</Typography>
      )
    
}


export default SectionTitle