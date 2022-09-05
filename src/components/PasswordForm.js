import React, { useState } from 'react'
import Bar from './Bar';
import { Box } from "@mui/system";
import { Checkbox } from '@mui/material';
import { Slider } from '@mui/material';
import { Button } from '@mui/material';

const PasswordForm = () => {

  const [length, setLength] = useState(10);

  const handleChange = (e) => {
    setLength(e.target.value);
  }
  return (
    <Box border="2px solid black" width="90%">
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <p>Character Length</p>
        <p>{length}</p>
      </Box>
      <Slider
          size="medium"
          defaultValue={10}
          onChange={handleChange}
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
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Box display="flex" flexDirection="row" justifyContent="space-between" width="80%">
          <p>STRENGTH</p>
          <Box display="flex" flexDirection="row" marginRight="8px">
            <p style={{ marginRight: '16px' }}>MEDIUM</p>
            <Bar />
            <Bar />
            <Bar />
            <Bar />
            <Bar />
          </Box>
        </Box>
        <Button style={{ width: '80%', marginBottom: '32px'}}  color="primary" variant="contained">GENERATE</Button>
      </Box>
    </Box>
  )
}
export default PasswordForm;