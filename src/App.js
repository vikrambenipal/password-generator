import React, { useState } from 'react';
import Copy from './components/Copy';
import PasswordForm from './components/PasswordForm';
import { Box } from "@mui/system";

function App() {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" 
    margin="80px auto 0px auto" maxWidth="600px">
      <h1>Password Generator</h1>
      <Copy />
      <PasswordForm />
    </Box>
  );
}

export default App;