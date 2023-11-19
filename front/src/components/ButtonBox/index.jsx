import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/material';


const ButtonBox = ({mount}) => {
    return (
        <Box>
            <AddIcon
                fontSize='small'
            />
                {mount}
            <RemoveIcon
                fontSize='small'
            />
        </Box>
    )
}

export default ButtonBox