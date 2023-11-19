import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons({handleQuitProduct}) {
  return (
    <Stack spacing={2} direction="row" >
      <Button variant="text" onClick={handleQuitProduct}>Quitar</Button>
    </Stack>
  );
}