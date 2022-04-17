import { Container, Error } from './styles'

import PropTypes from 'prop-types';
import { useState } from 'react'

import { Controller } from "react-hook-form";
import ErrorIcon from '@mui/icons-material/Error';
import TextField from '@mui/material/TextField';

export function Input ({
  required,
  id,
  label,
  errorText,
  multiline,
  rows,
  error,
  maxLength,
  control,
  name,
  value,
}) {

  const showErrorText = () => (
    <Error>
      <ErrorIcon fontSize="small"/>
      <span>{errorText}</span>
    </Error>
  )

  const [qtChar, setQtChar] = useState(0)

  const handleChange = (e, onChangeFunction ) => {
    const {value}= e.target
    onChangeFunction(value)
    if(maxLength) setQtChar(value.length)
  }

  return (
    <Container>
       <Controller
          rules={{required}}
          render={({field}) => (
            <TextField 
              id={id}
              label={`${label} ${required ? '*' : ''}`}
              errorText={error ? showErrorText() : null}
              multiline={multiline}
              rows={rows}
              error={error}
              inputProps={{ maxLength: maxLength}}
              variant="standard"
              {...field}
              onChange={(e) => handleChange(e, field.onChange)}
            />
          )}
          name={name}
          control={control}
        />
      {maxLength ? <small>{qtChar}/{maxLength}</small> : null}
    </Container>
  )

}

Input.defaultProps = {
  onChange: () => {},
  required: true,
  error: false,
  label: '',
  maxLength: null,
  name: '',
  value: '',
  multiline: false,
  errorText: '',
  rows: null,
  control: {},
  id: '',
};

Input.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  errorText: PropTypes.string,
  maxLength: PropTypes.number,
  control: PropTypes.object,
  name: PropTypes.string,
  label: PropTypes.string,
  multiline:PropTypes.bool,
  error: PropTypes.bool,
  rows: PropTypes.number,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};