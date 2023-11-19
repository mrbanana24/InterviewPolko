import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState, useEffect } from 'react';
import { getTotal } from '../../assets/api'

const styles = {
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #ac9e9e',
    boxShadow: 24,
    p: 4
  },
  button: {
    position: 'flex',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    '&:hover': {
      transform: 'translate(-50%,-50%) scale(1.05)',
      boxShadow: 8,
    },
  },
};

const BasicModal = () => {
  const [open, setOpen] = useState(false);
  const [productsTotal, setProductsTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const fetchTotalData = async () => {
      const response = await getTotal();
      if (response && response.data) {
        setProductsTotal(response.data.itemsTotal);
        setTotalPrice(response.data.priceTotal);
      }
    }
    fetchTotalData();
  } ,[])

   return (
    <div>
      <Button sx={styles.button} onClick={handleOpen}>Detalles de la compra!</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Cantidad de items: {productsTotal}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Precio total: {totalPrice}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}


export default BasicModal;