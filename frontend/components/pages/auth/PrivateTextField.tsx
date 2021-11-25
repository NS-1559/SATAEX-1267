import { InputAdornment, TextField } from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import { Eye, EyeOff } from 'react-feather';

interface PrivateTextFieldProps {
  error?: string;
  label: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const PrivateTextField: FC<PrivateTextFieldProps> = ({
  error,
  label,
  name,
  onChange,
}) => {
  const [type, setType] = useState<'text' | 'password'>('password');

  function toggleType() {
    setType(type === 'text' ? 'password' : 'text');
  }

  return (
    <TextField
      type={type}
      label={label}
      name={name}
      onChange={onChange}
      fullWidth
      helperText={error}
      error={Boolean(error)}
      InputProps={{
        endAdornment: (
          <InputAdornment
            sx={{ userSelect: 'none', cursor: 'pointer', ml: 3 }}
            position="start"
          >
            <span onClick={toggleType}>
              {type === 'text' ? <EyeOff /> : <Eye />}
            </span>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PrivateTextField;
