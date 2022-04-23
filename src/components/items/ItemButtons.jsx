import React from 'react'
import { ItemButtonsContainer } from './styles/ItemButtonsStyles'

const ItemButtons = ({buttonNames, isActive, setIsActive}) => {
  return (
    <ItemButtonsContainer>
        {buttonNames.map((item, index) => (
            <div
              className={index === isActive ? 'p-button-active' : 'p-button'}
              key={index}
              onClick={() => setIsActive(index)}
            >{item}</div>
          ))}
    </ItemButtonsContainer>
  )
}

export default ItemButtons