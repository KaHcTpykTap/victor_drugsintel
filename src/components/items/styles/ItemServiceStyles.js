import styled from "styled-components";

export const ItemServiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Titillium Web", sans-serif;

  .is-item {
    width: 55%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
  }

  .is-number {
    position: absolute;
    left: 0;
    top: -25px;
    font-size: 80px;
    color: #dadada;
    font-weight: 700;
  }

  .is-icon {
    height: 60px;
    width: 60px;
    border-radius: 30px;
    color: #fff;
    box-shadow: 0 5px 6px 0 rgb(0 0 0 / 10%);
    background: linear-gradient(100deg, #f9643d, #fe2a77);
    margin-bottom: 20px;
  }
  .material-icons-outlined {
    font-size: 36px;
    width: 100%;
    height: 100%;
    color: #fff;
    margin: 12px 0 0 12px;
  }

  h4 {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.2;
  }
  p {
    color: #9a9a9a;
    font-size: 22px;
    padding: 10px;
  }

  @media screen and (max-width: 768px) {
    .is-item {
      width: 100%;
    }
  }
`;
