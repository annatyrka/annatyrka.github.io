import React, { FC } from "react";
import Paper from '@mui/material/Paper';

const containerStyles = {
  backgroundColor: 'rgb(5, 8, 16)',
  height: '100vh'
}
const Container: FC<any> = ({children}) => (
<Paper sx={containerStyles}>
  {children}
</Paper>
)

export default Container;