import React from 'react'
import { Box } from "@mui/system";
import iconCopy from '../assets/images/icon-copy.svg'
import theme from '../theme';

const Copy = ({ password }) => {

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
  }

  return (
    <Box width="90%" marginBottom="16px" backgroundColor={theme.box_background_color}>
        <Box display="flex" flexDirection="row" justifyContent="space-between">
            <p style={{ paddingLeft: "5%"}}>{password}</p>
            <img onClick={handleCopy} src={iconCopy} alt="" 
            style={{
              alignSelf: 'center', 
              paddingRight: "5%", 
              cursor: "pointer",
              "&:hover": {
                filter: "invert(99%) sepia(36%) saturate(399%) hue-rotate(182deg) brightness(96%) contrast(91%)"
              }
            }}/>
        </Box>
    </Box>
  )
}
export default Copy;