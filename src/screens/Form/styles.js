import styled from 'styled-components'
import { styled as MuiStyled } from '@mui/material/styles';
import { MenuItem } from '@mui/material';

//Alterar essa parte

export const Container = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.26);
  max-width: 1200px;
  margin: 33px auto;
`

export const Content = styled.div`
  padding: 1rem;

  > div {
    margin-bottom: 2.25rem;
  }

  > div:first-child {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.25rem;

    @media (min-width: 768px) { 
      grid-template-columns: 2fr 1fr 1fr;
      gap: 1rem;
    }
  }

  > div:nth-child(2) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.25rem;
    
    @media (min-width: 768px) { 
      grid-template-columns: 2fr 2fr;
      gap: 1rem;
    }
  }

`

export const CustomOption = MuiStyled(MenuItem)(() => ({
  display: 'flex',
  flexDirection: 'column',
  'p': {
      width: '100%',
      '& + p': {
          marginTop: '-3px'
      }
  }
}));

export const Page = styled.div`

`
