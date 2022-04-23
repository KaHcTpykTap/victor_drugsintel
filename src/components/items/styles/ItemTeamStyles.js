import styled from "styled-components";

export const ItemTeamContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h3 {
    font-style: 20px;
    margin: 0 0 5px;
    color: #333;
    font-weight: 600;
  }

  .it-position {
    font-size: 14px;
    color: #555;
    line-height: 1.4;
  }

  p {
    color: #777;
    margin-top: 10px;
    padding: 0 15px;
    font-size: 22px;
  }

  img {
    max-width: 100%;
    height: auto;
    margin: 30px;
    transition: 0.3s margin ease-out;
  }

  img:hover {
    margin: 10px;
    transition: 0.3s margin ease-out;
  }

  .it-icons {
      width: 100%;
      height: 40px;
      border: 1px solid red;
      display: flex;
      align-items: center;
      justify-content: center;
  }
`;
