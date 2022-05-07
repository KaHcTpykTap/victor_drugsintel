import styled from "styled-components";
import img from '../../../images/backgr.jpg';

export const HomePageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${img});
  background-size: cover;

  .hp {
    width: min(100%, 1440px);
    height: 100%;
    padding: 9vh 30px 0 30px;
    display: flex;
    flex-direction: row;
    align-items: center;

/*     .hp-left {
      max-width: 45vw;
      padding: 0 15px;
      margin-left: 30px; */

      h2 {
        font-size: 48px;
        margin-bottom: 20px;
        font-weight: 600;
        line-height: 1.2;
      }
      h4 {
        font-weight: 600;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        line-height: 1.2;
        color: inherit;
      }

      button {
        background-image: linear-gradient(100deg, #f9643d, #fe2a77);
        color: #fff;
        font-size: 18px;
        letter-spacing: 1px;
        padding: 10px 40px;
        border: 1px solid transparent;
        border-radius: 2px;
        margin-top: 50px;
        cursor: pointer;
      }
   /*  } */
  }
`;
