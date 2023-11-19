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
import { getProducts,
         getArroces,
         getGaseosas,
         getFernets,
         getPanes,
         getCafes,
         addArroz,
         addGaseosa,
         addFernet,
         addPan,
         addCafe,
         deleteArroz,
         deleteCafe,
         deleteFernet,
         deleteGaseosa,
         deletePan,
         deleteAllArroces,
         deleteAllCafes,
         deleteAllFernets,
         deleteAllGaseosas,
         deleteAllPanes } from '../../assets/api'

export default function BasicTable() {
  const [productCounts, setProductCounts] = useState({
    fernet: 0,
    gaseosa: 0,
    arroz: 0,
    pan: 0,
    cafe: 0,
  });

  const [productPrices, setProductPrices] = useState({
    fernet: 0,
    gaseosa: 0,
    arroz: 0,
    pan: 0,
    cafe: 0,
  });

  const [prod, setProd] = useState([]);

  useEffect(() => {
    const fetchCounts = async () => {
      const fetchData = async (getFunc, product) => {
        const data = await getFunc();
        if (data && data.data && data.data.length > 0) {
          setProductCounts(prev => ({ ...prev, [product]: data.data.length }));
          setProductPrices(prev => ({ ...prev, [product]: data.data[0].precio }));
        }
      };

      await fetchData(getFernets, 'fernet');
      await fetchData(getGaseosas, 'gaseosa');
      await fetchData(getArroces, 'arroz');
      await fetchData(getPanes, 'pan');
      await fetchData(getCafes, 'cafe');

      const response = await getProducts();
      setProd(response.data);
    };

    fetchCounts();
  }, [prod]);

  const handleAddProduct = (product) => {
    // determinar que funcion llamar
    let func;
    switch (product) {
      case 'Fernet':
        func = addFernet;
        break;
      case 'Gaseosa':
        func = addGaseosa;
        break;
      case 'Arroz':
        func = addArroz;
        break;
      case 'Pan':
        func = addPan;
        break;
      case 'Cafe':
        func = addCafe;
        break;
      default:
        break;
    }

    // llamar a la funcion
    try{
      func().then((res) => {
        setProductCounts({
          ...productCounts,
          [product.toLowerCase()]: res.data.length,
        });
      });
    }
    catch(err){
      console.log(err)
    }

  };

  const handleRemoveProduct = (product) => {
    // determinar que funcion llamar
    let func;
    switch (product) {
      case 'Fernet':
        func = deleteFernet;
        break;
      case 'Gaseosa':
        func = deleteGaseosa;
        break;
      case 'Arroz':
        func = deleteArroz;
        break;
      case 'Pan':
        func = deletePan;
        break;
      case 'Cafe':
        func = deleteCafe;
        break;
      default:
        break;
    }

    // llamar a la funcion
    try{
      func().then((res) => {
        setProductCounts({
          ...productCounts,
          [product.toLowerCase()]: res.data.length,
        });
      });
    }
    catch(err){
      console.log(err)
    }
  };

  const handleDeleteProduct = (product) => {
    // determinar que funcion llamar
    let func;
    switch (product) {
      case 'Fernet':
        func = deleteAllFernets;
        break;
      case 'Gaseosa':
        func = deleteAllGaseosas;
        break;
      case 'Arroz':
        func = deleteAllArroces;
        break;
      case 'Pan':
        func = deleteAllPanes;
        break;
      case 'Cafe':
        func = deleteAllCafes;
        break;
      default:
        break;
    }

    // llamar a la funcion
    try{
      func().then((res) => {
        setProductCounts({
          ...productCounts,
          [product.toLowerCase()]: res.data.length,
        });
      });
    }
    catch(err){
      console.log(err)
    }
  }

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
          {prod?.map((product) => {
            const cantidad = productCounts[product.toLowerCase()];
            const precio = productPrices[product.toLowerCase()];
            const subtotal = precio;
            const total = precio * cantidad || 0;

            return (
              <TableRow key={product}>
                <TableCell component="th" scope="row">
                  <ButtonBox
                    mount={cantidad}
                    onAdd={() => handleAddProduct(product)}
                    onRemove={() => handleRemoveProduct(product)}
                  />
                </TableCell>
                <TableCell align="right">{product}</TableCell>
                <TableCell align="right">{subtotal}</TableCell>
                <TableCell align="right">{total}</TableCell>
                <TableCell align="right">{<Button handleQuitProduct={() => handleDeleteProduct(product)} />}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
