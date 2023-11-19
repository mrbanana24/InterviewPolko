import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/material';

const ButtonBox = ({ mount, onAdd, onRemove }) => {
    return (
        <Box>
            <AddIcon
                fontSize='small'
                onClick={onAdd}
                style={{ cursor: 'pointer' }}
            />
                {mount}
            <RemoveIcon
                fontSize='small'
                onClick={onRemove}
                style={{ cursor: 'pointer' }}
            />
        </Box>
    );
}

export default ButtonBox;
