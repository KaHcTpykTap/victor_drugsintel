import styled from "styled-components";

export const ItemButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  .p-button {
    background-color: #dadada;
    color: #666;
    padding: 0.5rem 1rem;
    margin: 0.2rem;
    cursor: pointer;
    &:hover {
      background: #f0326b;
      color: #fff;
    }
  }

  .p-button-active {
    background: #f0326b;
    color: #fff;
    padding: 0.5rem 1rem;
    margin: 0.2rem;
    cursor: pointer;
  }
`;
