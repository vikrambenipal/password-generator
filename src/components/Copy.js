import React from 'react'
import { Box } from "@mui/system";
import zxcvbn from 'zxcvbn';
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
            <img onClick={handleCopy} src={iconCopy} alt="" style={{alignSelf: 'center', paddingRight: "5%", cursor: "pointer"}}/>
        </Box>
    </Box>
  )
}
export default Copy;