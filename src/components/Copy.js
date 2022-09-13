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
            <p style={{ paddingLeft: "5%", color: theme.almost_white, fontSize: '20px' }}>{password}</p>
            <Box component="img" onClick={handleCopy} src={iconCopy} alt="" 
            sx={{
              ":hover":{
                filter: "invert(0%) sepia(0%) saturate(2%) hue-rotate(13deg) brightness(106%) contrast(101%)"
              }
            }}
            style={{
              alignSelf: 'center', 
              paddingRight: "5%", 
              cursor: "pointer",
            }}/>
        </Box>
    </Box>
  )
}
export default Copy;