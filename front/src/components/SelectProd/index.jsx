import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {handleClickFernet,
        handleClickCafe,
        handleClickArroz,
        handleClickPan,
        handleClickGaseosa} from './handleFunctions'


const styles = {
  form: {
    position: 'flex',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    boxShadow: 10,
    width: 300,
    marginTop: 15,
    minWidth: 120,
  }
}

export default function GroupedSelect() {

  return (
    <div>
      <FormControl sx={styles.form}>
        <InputLabel htmlFor="grouped-select">Agregar Producto</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          <ListSubheader>Bebidas</ListSubheader>
          <MenuItem value={1} onClick={handleClickGaseosa}>Gaseosa</MenuItem>
          <MenuItem value={2} onClick={handleClickFernet}>Fernet</MenuItem>
          <ListSubheader>Almacen</ListSubheader>
          <MenuItem value={3} onClick={handleClickPan}>Pan</MenuItem>
          <MenuItem value={4} onClick={handleClickCafe}>Cafe</MenuItem>
          <MenuItem value={5} onClick={handleClickArroz}>Arroz</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}