import React from 'react'
import { Box } from "@mui/system";
import iconCopy from '../assets/images/icon-copy.svg'

const Copy = () => {
  return (
    <Box border="2px solid black" width="90%" marginBottom="16px">
        <Box display="flex" flexDirection="row" justifyContent="space-between">
            <p style={{ paddingLeft: "5%"}}>Password</p>
            <img src={iconCopy} style={{alignSelf: 'center', paddingRight: "5%"}}/>
        </Box>
    </Box>
  )
}
export default Copy;