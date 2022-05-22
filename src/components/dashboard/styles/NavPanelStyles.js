import styled from "styled-components";

export const NavPanelContainer = styled.div`
  width: 300px;
  
  /* background-color: ${props => (props.indexColor ? 'white' : 'red')}; */
  background-color: white;
  
  border-top: 2px solid grey;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 40px;

/*   position: fixed;
  left: 15vw;
  top: 12vh; */

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  .np {
    cursor: pointer;
    margin: 1vh 0;
    width: 90%;
  }

  .active {
    color: #232323;
    font-weight: bold;
    
  }

  .inactive {
    color: #848484;
  }

`;
