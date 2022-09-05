import React from 'react'
import { Box } from "@mui/system";
import iconCopy from '../assets/images/icon-copy.svg'

const Copy = ({ password }) => {

  return (
    <Box border="2px solid black" width="90%" marginBottom="16px">
        <Box display="flex" flexDirection="row" justifyContent="space-between">
            <p style={{ paddingLeft: "5%"}}>{password}</p>
            <img src={iconCopy} style={{alignSelf: 'center', paddingRight: "5%", cursor: "pointer"}}/>
        </Box>
    </Box>
  )
}
export default Copy;