import React from 'react'
import { ItemServiceContainer } from './styles/ItemServiceStyles'

const ItemService = ({ id, icon, header, description }) => {
  return (
    <ItemServiceContainer>
      <div className="is-item">
        <div className='is-number'>{id}</div>
        <div className='is-icon'>
          <span className="material-icons-outlined">
            {icon}
          </span>
          
        </div>
        <h4>{header}</h4>
        <p>{description}</p>
      </div>


    </ItemServiceContainer>
  )
}

export default ItemService