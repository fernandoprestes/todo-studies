import styled from 'styled-components'

export const List = styled.aside`
  grid-area: tarefas;
  height: 100%;

  h2 {
    font-size: 1.25rem;
    margin-bottom: 12px;
  }

  ul {
    max-height: 350px;
    overflow-y: scroll;
    scrollbar-width: thin;
    
  }

  @media screen and (min-width: 1280px) {
    h2 {
      text-align: center;
      font-size: 2.25rem;
      margin-bottom: 24px;
    }

    ul {
      overflow: auto;
      max-height: 500px;
    }
  }

  .item {
    background-color: #292929;
    border-radius: 0 0 8px 8px;
    border: 1px solid #A69992;
    padding: 12px;
    margin-bottom: 8px;
    position: relative;
    cursor: pointer;
    margin-bottom: 1rem;


    h3 {
      margin-bottom: 8px;
      word-break: break-all;
    }

    span {
      color: #d0d0d0;
    }

    @media screen and (min-width: 1280px) {
      font-size: 1.8rem;
    }
  }

  .itemSelecionado {
    background-color: #4d4d4d;
    box-shadow: 0px 4px 0px #A69992;
  }

  .itemCompletado {
    background-color: #566f42;
    cursor: auto;

    .concluido {
      display: block;
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
      width: 42px;
      height: 43px;
    }
  }
`
