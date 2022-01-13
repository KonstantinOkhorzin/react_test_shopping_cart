import React from 'react';
import { Snackbar, Alert } from '@mui/material';

function Snack({ isOpen, handleClose }) {

    return (
        <Snackbar
            open={isOpen}
            autoHideDuration={1000}
            onClose={handleClose}>
            <Alert severity="success">Item added to cart</Alert>
        </Snackbar >
    );
}

export default Snack;