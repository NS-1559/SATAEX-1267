import { Alert, Snackbar, SnackbarOrigin } from '@mui/material';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '@app/hooks/redux';
import { commonActions } from '@app/store/common/commonSlice';

export interface State extends SnackbarOrigin {
  open: boolean;
}

const Toast: FC = () => {
  const { open, message, type } = useAppSelector((state) => state.common.toast);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(commonActions.closeToast());
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      onClose={handleClose}
      key="topcenter"
    >
      <Alert severity={type}>{message}</Alert>
    </Snackbar>
  );
};

export default Toast;
