import React from 'react';
import Button from '@mui/material/Button';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <Button variant="contained" color="primary">
        Primary Themed Button
      </Button>
      <Button variant="contained" color="secondary" style={{ marginLeft: '10px' }}>
        Secondary Themed Button
      </Button>
    </div>
  );
}

export default App;