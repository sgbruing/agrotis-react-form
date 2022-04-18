import styled from 'styled-components'

export const Error = styled.small`
  display: flex;
  align-items: center;

  > span {
    margin-left: 5px;
  }

  font-size: 0.70rem;

`

export const Container = styled.div`
  position: relative;

  > div {
    width: 100%;
  }

  /* LABEL COLOR  */
  .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused,
  .css-5xn5lu-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before
  {
    color: #00796B !important;
  }

  /* BORDER COLOCR */
  .css-1480iag-MuiInputBase-root-MuiInput-root:after,
  .css-1480iag-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before,
  .css-5xn5lu-MuiInputBase-root-MuiInput-root:after,
  .css-5xn5lu-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before {
    border-bottom: 2px solid #00796B !important;
  }

  /* char counter */
  > small {
    display: block;
    position: absolute;
    margin-top: 0.2rem;
    right: 0;
    font-size: 0.75rem;
    color: #828D8C;
  }

`