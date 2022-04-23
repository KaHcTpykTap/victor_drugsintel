import styled from "styled-components";

export const MethodologeContainer = styled.div`
  width: min(100%, 1440px);
  min-height: 100vh;
  margin-inline: auto;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10vh 30px 0 30px;

  .m-title {
    padding: 0 0 50px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }

  .span {
    background-image: linear-gradient(100deg, #f9643d, #fe2a77);
    height: 6px;
    border-radius: 3px;
    width: 90px;
    margin-bottom: 10px;
  }

  h2 {
    color: #232323;
    font-family: "Titillium Web", sans-serif;
    font-size: 35px;
    font-weight: 700;
  }

  .m-item {
    width: 100%;
    padding: 30px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;

    .material-icons {
      font-size: 48px;
      color: #f0326b;
    }

    .material-icons-outlined {
      font-size: 48px;
      color: #f0326b;
    }
  }
  p {
    padding-top: 3vh;
    font-family: "Titillium Web", sans-serif;
    color: #777;
    font-size: 22px;
  }
`;
