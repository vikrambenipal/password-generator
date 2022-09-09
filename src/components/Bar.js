import React from 'react'
import { Box } from "@mui/system";
import strengthLevel from '../strength';
import theme from '../theme';

const Bar = ({ number, strength }) => {

  const getColor = () => {
    switch(strength){
      case strengthLevel.veryWeak:
        if(number <= 1) return theme.red;
        return;
      case strengthLevel.weak:
        if(number <= 2) return theme.orange;
        return;
      case strengthLevel.medium:
        if(number <= 3) return theme.yellow;
        return;
      case strengthLevel.strong:
        if(number <= 4) return theme.neon_green;
        return;
      default:
        return;
    }
  }

  return (
    <Box 
      alignSelf="center" 
      backgroundColor={getColor()}
      width="10px" 
      height="28px" 
      marginRight="8px" 
      border="2px solid black">
    </Box>
  )
}
export default Bar;