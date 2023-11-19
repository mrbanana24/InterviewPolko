import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/material';


const styles = {
    amount: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '150%',
    }
}

const ButtonBox = ({mount}) => {
    return (
        <Box>
            <AddIcon
                fontSize='small'
            />
            <div sx={styles.amount}>
                {mount}
            </div>
            <RemoveIcon
                fontSize='small'
            />
        </Box>
    )
}

export default ButtonBox