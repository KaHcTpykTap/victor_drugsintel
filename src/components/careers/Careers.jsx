import React, { useState } from 'react'
import { CareersContainer } from './styles/CareersStyles'
import HeaderSpan from '../headerSpan/HeaderSpan';
import ItemButtons from '../items/ItemButtons';
import Item from '../items/Item';
import {dataCareers} from '../utils/dataCareers';

const Careers = () => {

  const header = 'Careers';
  const description = 'Want to be a part of HI-TECH family, come work with us!';

  const buttonNames =
  ['Appointed Pharmacist', 'Regulatory Affairs Associate'];


const [isActive, setIsActive] = useState(0);

  return (
    <CareersContainer>
      <HeaderSpan header={header} description={description}/>
      <ItemButtons isActive={isActive} setIsActive={setIsActive} buttonNames={buttonNames}/>
      {dataCareers.filter(item => item.id === isActive).map((item, index) => (
          <Item
            key={index}
            image={item.image}
            header={item.header}
            description={item.description}
            subHeader={item.subHeader}
            subDescription={item.subDescription}
          />
        ))}
    </CareersContainer>
  )
}

export default Careers