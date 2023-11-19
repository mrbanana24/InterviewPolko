import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function GroupedSelect() {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-select">Producto</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          <ListSubheader>Bebidas</ListSubheader>
          <MenuItem value={1}>Gaseosa</MenuItem>
          <MenuItem value={2}>Fernet</MenuItem>
          <ListSubheader>Almacen</ListSubheader>
          <MenuItem value={3}>Pan</MenuItem>
          <MenuItem value={4}>Cafe</MenuItem>
          <MenuItem value={5}>Arroz</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}