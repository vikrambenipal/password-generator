import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import Copy from './components/Copy';
import PasswordForm from './components/PasswordForm';
import { Box } from "@mui/system";
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${theme.app_background_color}
  }
`
function App() {
  const [password, setPassword] = useState("P4$5WOrD!");
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" 
    margin="40px auto 0px auto" maxWidth="600px">
      <GlobalStyle />
      <h1 style={{ color: theme.grey, fontSize: '20px', marginBottom: '20px' }}>Password Generator</h1>
      <Copy password={password}/>
      <PasswordForm setPassword={setPassword}/>
    </Box>
  );
}

export default App;
