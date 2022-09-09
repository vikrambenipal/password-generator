import React from 'react'
import { Box } from "@mui/system";
import zxcvbn from 'zxcvbn';
import iconCopy from '../assets/images/icon-copy.svg'

const Copy = ({ password }) => {

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
  }

  return (
    <Box border="2px solid black" width="90%" marginBottom="16px">
        <Box display="flex" flexDirection="row" justifyContent="space-between">
            <p style={{ paddingLeft: "5%"}}>{password}</p>
            <img onClick={handleCopy} src={iconCopy} alt="" style={{alignSelf: 'center', paddingRight: "5%", cursor: "pointer"}}/>
        </Box>
    </Box>
  )
}
export default Copy;