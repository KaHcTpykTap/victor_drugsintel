import styled from "styled-components";

export const VisionContainer = styled.div`
  width: min(100%, 1440px);
  margin-inline: auto;
  background-color: whitesmoke;
  padding: 11vh 30px 70px 30px;
  display: flex;
  flex-direction: column;

  h2 {
    color: #232323;
    font-family: "Titillium Web", sans-serif;
    font-size: 40px;
    font-weight: 700;
  }

  span {
    background-image: linear-gradient(100deg, #f9643d, #fe2a77);
    height: 6px;
    border-radius: 3px;
    width: 90px;
    margin-bottom: 10px;
  }

  .v-title {
    padding: 0 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .v-vision {
    display: flex;
    flex-direction: row;
    margin: 50px 0 15px 0;
    align-items: center;
    justify-content: center;
  }

  .v-overview {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    margin: 50px 0 15px 0;
  }

  .v-vision-left {
    width: 40%;
    /*  height: 200px; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin: 0 0 0 60px; */
    padding: 0 15px;
  }

  img {
    width: 100%;
    box-shadow: 0 0 30px 0 rgb(0 0 0 / 34%);
    height: auto;

    //???
    vertical-align: middle;
  }

  .v-vision-right {
    width: 40%;
    /* height: 200px;   */
    padding: 0 15px;
  }
  p {
    font-size: 22px;
    font-weight: 700;
    line-height: 1.6;
    margin-top: 20px;
    color: #9a9a9a;
    font-weight: 400;
  }

  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 768px) {
    .v-vision {
      display: flex;
      flex-direction: column;
      margin: 0 15px;
    }

    .v-vision-left {
      width: 100%;
      /*  height: 200px; */
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      padding: 0 15px;

      img {
        width: 100%;
        box-shadow: 0 0 30px 0 rgb(0 0 0 / 34%);

        height: auto;
        //???
        /* vertical-align: middle; */
      }
    }

    .v-vision-right {
      width: 100%;
      /* height: 200px;   */
      padding: 0 15px;

      p {
        font-size: 22px;
        font-weight: 700;
        line-height: 1.6;
        margin-top: 20px;
        color: #9a9a9a;
        font-weight: 400;
      }
    }
  }
`;
