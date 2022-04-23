import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin: 30px 0 15px 0;
  align-items: center;
  justify-content: center;

  .i-left {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 0 60px;
    padding: 0 15px;
  }

  .i-right {
    width: 40%;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
  }

  p {
    font-size: 22px;
    font-weight: 700;
    line-height: 1.6;
    margin-top: 0;
    color: #9a9a9a;
    font-weight: 400;
    text-align: justify;
  }

  img {
    width: 90%;
    box-shadow: 0 0 30px 0 rgb(0 0 0 / 34%);
  }

  h2 {
    color: #232323;
    font-family: "Titillium Web", sans-serif;
    font-size: 2rem;
    font-weight: 600;
    text-align: left;
    line-height: 1.2;
  }

  h3 {
      font-weight: bolder;
      color: #9a9a9a;
      font-size: 22px;
      text-align: left;
      margin: 15px 0;
  }


`;
