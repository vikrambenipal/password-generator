import React, { useState } from 'react'
import Bar from './Bar';
import { Box } from "@mui/system";
import { Checkbox } from '@mui/material';
import { Slider } from '@mui/material';
import { Button } from '@mui/material';
import zxcvbn from 'zxcvbn';
import arrowIcon from '../assets/images/icon-arrow-right.svg';
import strengthLevel from '../strength';
import theme from '../theme';

const PasswordForm = ({ setPassword }) => {

  const [length, setLength] = useState(10);
  const [strength, setStrength] = useState("");

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

    let newPassword = ""
    let chars = "";
    if(hasLower) chars += "abcdefghijklmnopqrstuvwxyz";
    if(hasUpper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(hasNumber) chars += "1234567890";
    if(hasSymbol) chars += "!@#$%^&*()";

    if(chars === "") return; 

    for(var i = 0; i < length; ++i){
      var randomNumber = Math.floor(Math.random() * chars.length);
      newPassword += chars[randomNumber];
    }
    
    const score = zxcvbn(newPassword).score;
    if(score <= 1){
      setStrength(strengthLevel.veryWeak)
    }else if(score === 2){
      setStrength(strengthLevel.weak)
    }else if(score === 3){
      setStrength(strengthLevel.medium)
    }else{
      setStrength(strengthLevel.strong)
    }
    setPassword(newPassword);
  }

  return (
    <Box width="90%" backgroundColor={theme.box_background_color}>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <p style={{ paddingLeft: "5%"}}>Character Length</p>
        <p style={{ color: theme.neon_green, paddingRight: "5%"}}>{length}</p>
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
            sx={{ color: theme.neon_green, 
              '& .MuiSlider-thumb': { color: theme.almost_white }, 
              '& .MuiSlider-rail': { color: theme.app_background_color }}}
        />
      </Box>
      <Box padding="0 3%">
        <Box display="flex" flexDirection="row">
          <Checkbox id="upper" onClick={handleCheckbox} sx={{ color: theme.neon_green, '&.Mui-checked': { color: theme.neon_green }}}/>
          <p>Include Uppercase Letters</p>
        </Box>
        <Box display="flex" flexDirection="row">
          <Checkbox id="lower" onClick={handleCheckbox} sx={{ color: theme.neon_green, '&.Mui-checked': { color: theme.neon_green }}}/>
          <p>Include Lowercase Letters</p>
        </Box>
        <Box display="flex" flexDirection="row">
          <Checkbox id="number" onClick={handleCheckbox} sx={{ color: theme.neon_green, '&.Mui-checked': { color: theme.neon_green }}}/>
          <p>Include Numbers</p>
        </Box>
        <Box display="flex" flexDirection="row">
          <Checkbox id="symbol" onClick={handleCheckbox} sx={{ color: theme.neon_green, '&.Mui-checked': { color: theme.neon_green }}}/>
          <p>Include Symbols</p>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Box display="flex" flexDirection="row" justifyContent="space-between" width="90%" 
        backgroundColor={theme.app_background_color} marginTop="10px" marginBottom="30px">
          <p style={{ paddingLeft: "32px" }}>STRENGTH</p>
          <Box display="flex" flexDirection="row" marginRight="8px">
            <p style={{ marginRight: '16px' }}>{strength}</p>
            <Bar number={1} strength={strength}/>
            <Bar number={2} strength={strength}/>
            <Bar number={3} strength={strength}/>
            <Bar number={4} strength={strength}/>
          </Box>
        </Box>
        <Button onClick={handleGenerate} 
        sx={{ color: 'black', 
          backgroundColor: theme.neon_green, 
          fontFamily: "JetBrainsMonoBold",
          ":hover": { 
            border: '1px solid ' + theme.neon_green, 
            bgcolor: theme.box_background_color, 
            color: theme.neon_green,
            "img": {
              filter: "invert(87%) sepia(9%) saturate(1462%) hue-rotate(71deg) brightness(101%) contrast(107%)",
            }
          },
        }}
        style={{ paddingTop: '12px', 
          paddingBottom: '12px', 
          width: '90%', 
          marginBottom: '32px'
        }} variant="contained">GENERATE<span><img style={{ alignSelf: 'center', marginLeft: '18px'}} src={arrowIcon} alt=""/></span></Button>
      </Box>
    </Box>
  )
}
export default PasswordForm;