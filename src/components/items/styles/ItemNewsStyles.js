import styled from "styled-components";

export const ItemNewsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-style: 23px;
    font-weight: 600;
    margin-bottom: 0.5rem;
    line-height: 1.2;
    cursor: pointer;
    margin-top: 20px;
  }

  .in-headerBottom {
    font-size: 14px;
    color: #888;
    line-height: 1.4;
    font-weight: 400;
  }

  p {
    color: #757575;
    margin: 10px 0;
    font-size: 22px;
    line-height: 1.4;
  }

  img {
    width: 100%;
    box-shadow: 0 0 30px 0 rgb(0 0 0 / 34%);
    height: auto;

    //???
    vertical-align: middle;
  }
`;
