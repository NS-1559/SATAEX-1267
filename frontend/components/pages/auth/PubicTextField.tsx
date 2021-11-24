import { InputAdornment, TextField } from '@mui/material';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { XCircle } from 'react-feather';

interface PublicTextFieldProps {
  error?: string;
  label: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const PubicTextField: FC<PublicTextFieldProps> = ({
  error,
  label,
  name,
  onChange,
}) => {
  const [value, setValue] = useState<string>('');

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function onClearTextField() {
    setValue('');
  }

  useEffect(() => {
    onChange({ target: { name, value } } as ChangeEvent<HTMLInputElement>);
  }, [name, onChange, value]);

  return (
    <TextField
      type="text"
      label={label}
      name={name}
      fullWidth
      helperText={error}
      error={Boolean(error)}
      value={value}
      onChange={onInputChange}
      InputProps={{
        endAdornment: (
          <InputAdornment
            sx={{ userSelect: 'none', cursor: 'pointer', ml: 3 }}
            position="start"
          >
            <XCircle onClick={onClearTextField} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PubicTextField;
