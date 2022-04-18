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
  errortext,
  multiline,
  rows,
  error,
  maxLength,
  control,
  name,
  value,
}) {

  const showerrortext = () => (
    <Error>
      <ErrorIcon fontSize="small"/>
      <span>{errortext}</span>
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
              errortext={error ? showerrortext() : null}
              multiline={multiline}
              rows={rows}
              variant="standard"
              error={error}
              color="success"
              inputProps={{ maxLength: maxLength}}
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
  errortext: '',
  rows: null,
  control: {},
  id: '',
};

Input.propTypes = {
  onChange: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.bool,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  multiline:PropTypes.bool,
  errortext: PropTypes.string,
  rows: PropTypes.number,
  control: PropTypes.object,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};