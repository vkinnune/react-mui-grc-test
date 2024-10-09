// src/App.tsx

import React from 'react';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
  
function App() {
  return (
    <div style={{ padding: '20px' }}>
      {/* Add the Switch component here */}
      <Switch />

      {/* Existing buttons */}
      <Button variant="contained" color="primary" style={{ marginRight: '10px' }}>
        Button One
      </Button>
      <Button variant="outlined" color="secondary">
        Button Two
      </Button>
    </div>
  );
}

export default App;