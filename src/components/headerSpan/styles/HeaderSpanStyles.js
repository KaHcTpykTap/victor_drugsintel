import styled from "styled-components";

export const HeaderSpanContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 20px 0;

  .span {
    background-image: linear-gradient(100deg, #f9643d, #fe2a77);
    height: 6px;
    border-radius: 3px;
    width: 90px;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 10px;
    line-height: 10px;
    font-weight: 700;
    letter-spacing: 3.3px;
    text-transform: uppercase;
  }

  h2 {
    color: #232323;
    font-family: "Titillium Web", sans-serif;
    font-size: 35px;
    font-weight: 700;
    text-transform: capitalize;
  }

  .p-p {
    width: 60%;
    margin: 10px auto;
  }

  p {
    font-size: 22px;
    line-height: 1.4;
    color: #848484;
    font-weight: 400;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    .p-p {
      width: 90%;
    }
  }
`;
