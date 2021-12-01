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
    background-color: #4d4d4d;
    border-radius: 8px;
    box-shadow: 2px 4px 4px #0000009f;
    padding: 12px;
    margin-bottom: 8px;
    position: relative;
    cursor: pointer;

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
    background-color: #292929;
    box-shadow: 2px 4px 4px #0000009f inset;
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
