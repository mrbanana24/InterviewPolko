import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '../Button'
import ButtonBox from '../ButtonBox';
import {useEffect, useState} from 'react';
import {getProducts} from '../../assets/api'


export default function BasicTable() {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    const FetchProducts = async () => {
      const response = await getProducts();
      console.log('Productos:',response);
      setProd(response.data);
    };
    FetchProducts();
  }, []);


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="products table">
        <TableHead>
          <TableRow>
            <TableCell>Cantidad</TableCell>
            <TableCell align="right">Descripcion</TableCell>
            <TableCell align="right">Subtotal</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {prod?.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {<ButtonBox mount={2}/> }
              </TableCell>
              <TableCell align="right">{row}</TableCell>
              <TableCell align="right">{'asd'}</TableCell>
              <TableCell align="right">{'as'}</TableCell>
              <TableCell align="right">{<Button/>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}