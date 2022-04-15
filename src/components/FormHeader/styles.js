import styled from 'styled-components'

export const Container = styled.header`
  padding: 1rem;
  background: #00796B;
  color: #ffffff;

  display: flex;
  justify-content: space-between;
  align-items: center;  

  h1 {
    /* Colocar em as fontes em um estilo global */
    font-family: 'Roboto', sans-serif;
    font-weight: 400 !important;
    font-size: 1.25rem;
  }

  button {
    /* Colocar em as fontes em um estilo global */
    font-family: 'Roboto', sans-serif;
    font-weight: 400 !important;

    background: #00796B;
    color: #ffffff;

    border: none;
    outline: none;
    padding: 0.6875rem 1rem;
    
    font-size: 0.875rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    transition: background 0.2s;
    &:hover {
      background: #00a98e;
    }
  }
`
