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
import { useEffect, useState } from 'react';
import { getProducts, getArroces, getGaseosas, getFernets, getPanes, getCafes } from '../../assets/api'

export default function BasicTable() {
  const [productCounts, setProductCounts] = useState({
    fernet: 0,
    gaseosa: 0,
    arroz: 0,
    pan: 0,
    cafe: 0,
  });
  const [prod, setProd] = useState([]);

  useEffect(() => {
    const fetchCounts = async () => {
      const fernetData = await getFernets();
      const gaseosaData = await getGaseosas();
      const arrozData = await getArroces();
      const panData = await getPanes();
      const cafeData = await getCafes();

      setProductCounts({
        fernet: fernetData.data.length,
        gaseosa: gaseosaData.data.length,
        arroz: arrozData.data.length,
        pan: panData.data.length,
        cafe: cafeData.data.length,
      });

      const response = await getProducts();
      setProd(response.data);
    };

    fetchCounts();
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
          {prod?.map((product) => (
            <TableRow
              key={product}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {<ButtonBox mount={productCounts[product.toLowerCase()]}/>}
              </TableCell>
              <TableCell align="right">{product}</TableCell>
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
