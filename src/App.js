import React, { useState } from 'react';
import Copy from './components/Copy';
import PasswordForm from './components/PasswordForm';
import { Box } from "@mui/system";

function App() {
  const [password, setPassword] = useState("P4$5WOrD!");
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" 
    margin="80px auto 0px auto" maxWidth="600px">
      <h1>Password Generator</h1>
      <Copy password={password}/>
      <PasswordForm setPassword={setPassword}/>
    </Box>
  );
}

export default App;
