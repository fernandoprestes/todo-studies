import styled from 'styled-components'

export const Timer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-area: cronometro;

  .relogioWrapper {
    align-items: center;
    background-color: #593719;
    border-radius: 0 0 10px 10px;
    box-shadow: 4px 4px 0px #A69992;
    box-sizing: border-box;
    display: flex;
    font-size: 5rem;
    justify-content: center;
    margin-bottom: 24px;
    padding: 16px 12px;
    width: 100%;
  }

  .titulo {
    font-size: 2rem;
  }

  @media screen and (min-width: 1280px) {
    .relogioWrapper {
      font-size: 15rem;
    }

    p {
      font-size: 2rem;
    }

    button {
      grid-column-start: span 2;
      justify-self: center;
      width: 200px;
      font-size: 2.25rem;
    }
  }

  .relogioNumero {
    background-color: #282828;
    border: 2px solid #A69992;
    height: 3.6rem;
    width: 3rem;
    padding: 8px 4px;
    border-radius: 10px;
    margin: .1rem auto;

    @media screen and (min-width: 1280px) {
      height: 10.8rem;
      width: 9rem;
    }
  }

  .relogioDivisao {
    height: 4.2rem;

    @media screen and (min-width: 1280px) {
      height: 12.6rem;
    }
  }
`
