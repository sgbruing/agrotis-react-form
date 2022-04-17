import styled from 'styled-components'
import TextFieldMaterial from '@mui/material/TextField';


export const TextField = styled(TextFieldMaterial) `
  
  .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: #00796B !important;
  }

  .css-1480iag-MuiInputBase-root-MuiInput-root:after,
  .css-1480iag-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before {
    border-bottom: 2px solid #00796B !important;
  }

`
export const Error = styled.small`
  display: flex;
  align-items: center;
  font-size: 0.75rem;

  > span {
    margin-left: 5px;
  }
`