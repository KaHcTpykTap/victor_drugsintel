import React from 'react'
import { ItemContainer } from './styles/ItemStyles'

const Item = ({image, header, description, subHeader, subDescription}) => {
  return (
    <ItemContainer>
        <div className="i-left">
          <img src={image} alt=''></img>
        </div>
        <div className="i-right">
          <h2>{header}</h2>
          <p>
            {description}
          </p>
          <h3>{subHeader && subHeader}</h3>
          {subDescription && subDescription.map((item,index) => (
              <p key={index}>{item}</p>
          ))}
          
        </div>
    </ItemContainer>
  )
}

export default Item