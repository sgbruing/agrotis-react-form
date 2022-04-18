import { forwardRef } from 'react';

import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import Snackbar from '@mui/material/Snackbar';
import DoneIcon from '@mui/icons-material/Done';
import Slide from '@mui/material/Slide';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export function EventSnackbar({ eventNotice, setEventNotice }) {
    function handleClose() {
        setEventNotice({ isOpen: false, isError: eventNotice.isError });
    };

    return (
        <Snackbar onClose={handleClose} sx={{ width: 450 }} open={eventNotice.isOpen} autoHideDuration={3000}  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} TransitionComponent={Slide}>
            {eventNotice.isError ? (
                <Alert icon={<ReportProblemIcon sx={{ width: '100%' }} onClose={handleClose}  fontSize="inherit" />} severity="error">
                    Preencha os campos obrigatórios.
                </Alert>
            ) : (
                <Alert icon={<DoneIcon fontSize="inherit" />} sx={{ width: '100%' }} onClose={handleClose} severity="success">
                    Cadastro realizado com sucesso!
                </Alert>
            )}
        </Snackbar>
    )
}