import styled from "styled-components";

export const ContactContainer = styled.div`
  width: min(100%, 1440px);
  min-height: 100vh;
  margin-inline: auto;
  background-color: whitesmoke;
  padding: 11vh 5vw 70px 5vw;
  display: flex;
  flex-direction: column;


  input {
    height: 45px !important;
    padding: 0.375rem 0.75rem;
    overflow: visible;
  }

  input,
  textarea {
    margin-bottom: 1rem;
    color: #0c0c0c;
    line-height: 1.5;
    width: 100%;
    border-radius: 3px;
    font-size: 14px;
    border: 1px solid #dedede;
  }

  input:hover,
  textarea:hover {
    border-color: #f0326b;
  }

  textarea {
    padding: 10px;
    height: 120px !important;
    outline: 0;
    display: block;
    overflow: auto;
    resize: vertical;
  }

  input:focus, textarea:focus {
    outline: none;
    border-color: #f0326b;
}

  button {
    width: 100%;
    height: 40px;
    background-color: #f0326b;
    border: none;
    color: #fff;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    text-align: center;
    vertical-align: middle;
    padding: 0.375rem 0.75rem;
    cursor: pointer;
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 400;
  }

  .c-submit {
    background-color: #6cb670;
    border-radius: 4px;
    color: #fff;
    font-size: 13px;
    padding: 10px;
    line-height: 1.4;
    font-weight: 400;
    text-align: left;
  }
`;
