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

  /* char counter */
  > small {
    margin-top: 0.25rem;
    position: absolute;
    display: block;
    right: 0;
    color: #828D8C;
    font-size: 0.74rem;
  }

`