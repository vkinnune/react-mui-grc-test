import React from 'react';
import Button from '@mui/material/Button';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Button variant="text" color="warning" style={{ margin: '10px' }}>
        Button One
      </Button>
      <Button variant="outlined" color="primary" style={{ margin: '10px' }}>
        Button Two
      </Button>
    </div>
  );
}

export default App;