import React, { useState } from 'react'
import Bar from './Bar';
import { Box } from "@mui/system";
import { Checkbox } from '@mui/material';
import { Slider } from '@mui/material';
import { Button } from '@mui/material';

const PasswordForm = () => {

  const [length, setLength] = useState(10);
  const [strength, setStrength] = useState("STRENGTH");

  const [hasLower, setHasLower] = useState(false);
  const [hasUpper, setHasUpper] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSymbol, setHasSymbol] = useState(false);

  const handleChange = (e) => {
    setLength(e.target.value);
  }
  const handleCheckbox = (e) => {
    const id = e.target.id;
    switch(id){
      case "lower":
        setHasLower(!hasLower)
        break;
      case "upper":
        setHasUpper(!hasUpper)
        break;
      case "number":
        setHasNumber(!hasNumber)
        break;
      case "symbol":
        setHasSymbol(!hasSymbol)
        break;
      default:
    }
  }
  const handleGenerate = () => {
    
  }

  return (
    <Box border="2px solid black" width="90%">
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <p style={{ paddingLeft: "5%"}}>Character Length</p>
        <p style={{ paddingRight: "5%"}}>{length}</p>
      </Box>
      <Box padding="0 5%">
        <Slider
            size="medium"
            defaultValue={10}
            onChange={handleChange}
            min={0}
            max={20}
            aria-label="Small"
            valueLabelDisplay="auto"
        />
      </Box>
      <Box padding="0 3%">
        <Box display="flex" flexDirection="row">
          <Checkbox id="upper" onClick={handleCheckbox}/>
          <p>Include Uppercase Letters</p>
        </Box>
        <Box display="flex" flexDirection="row">
          <Checkbox id="lower" onClick={handleCheckbox}/>
          <p>Include Lowercase Letters</p>
        </Box>
        <Box display="flex" flexDirection="row">
          <Checkbox id="number" onClick={handleCheckbox}/>
          <p>Include Numbers</p>
        </Box>
        <Box display="flex" flexDirection="row">
          <Checkbox id="symbol" onClick={handleCheckbox}/>
          <p>Include Symbols</p>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Box display="flex" flexDirection="row" justifyContent="space-between" width="90%">
          <p>{strength}</p>
          <Box display="flex" flexDirection="row" marginRight="8px">
            <p style={{ marginRight: '16px' }}>MEDIUM</p>
            <Bar />
            <Bar />
            <Bar />
            <Bar />
          </Box>
        </Box>
        <Button onClick={handleGenerate} 
        style={{ width: '90%', marginBottom: '32px'}}  color="primary" variant="contained">GENERATE</Button>
      </Box>
    </Box>
  )
}
export default PasswordForm;