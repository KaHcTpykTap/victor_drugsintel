import React from 'react'
import ButtonNews from './ButtonNews'
import { ItemNewsContainer } from './styles/ItemNewsStyles'

const ItemNews = ({image, header, headerBottom, description}) => {
  return (
    <ItemNewsContainer>
        <img src={image} alt='vision'></img>
        <h3>{header}</h3>
        <div className='in-headerBottom'>{headerBottom}</div>
        <p>{description}</p>
        <ButtonNews/>

    </ItemNewsContainer>
  )
}

export default ItemNews