import React from 'react'
import { Box } from "@mui/system";
import { Checkbox } from '@mui/material';
import { Slider } from '@mui/material';
import { Button } from '@mui/material';

const PasswordForm = () => {
  return (
    <Box border="2px solid black" width="90%">
      <Box display="flex" lexDirection="row" justifyContent="space-between">
        <p>Character Length</p>
        <p>10</p>
      </Box>
      <Slider
          size="medium"
          defaultValue={10}
          min={0}
          max={20}
          aria-label="Small"
          valueLabelDisplay="auto"
      />
      <Box>
        <Box display="flex" flexDirection="row">
          <Checkbox/>
          <p>Include Uppercase Letters</p>
        </Box>
        <Box display="flex" flexDirection="row">
          <Checkbox/>
          <p>Include Lowercase Letters</p>
        </Box>
        <Box display="flex" flexDirection="row">
          <Checkbox/>
          <p>Include Numbers</p>
        </Box>
        <Box display="flex" flexDirection="row">
          <Checkbox/>
          <p>Include Symbols</p>
        </Box>
      </Box>
      <Box>
        <p>STRENGTH</p>
        <p>MEDIUM</p>
      </Box>
      <Button color="primary" variant="contained">GENERATE</Button>
    </Box>
  )
}
export default PasswordForm;