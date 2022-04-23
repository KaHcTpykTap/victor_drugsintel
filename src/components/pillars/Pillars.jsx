import React, { useState } from 'react'
import ItemButtons from '../items/ItemButtons';
import { PillarsContainer } from './styles/PillarsStyles';
import { dataPillars } from '../utils/data';
import Item from '../items/Item';
import HeaderSpan from '../headerSpan/HeaderSpan';

function Pillars() {

  const header = 'Six Pillars of Success';
  const description = `Learn more about the revolutionary Six Pillars methodology of successful
  launching an Orphan Drug Globally`;

  const buttonNames =
    ['Detection & Diagnosis', 'Incentive & Reimbursement', 'KOL',
      'Real World Evidence', 'Advocacy Group', 'Disease Awareness'];


  const [isActive, setIsActive] = useState(0);
  return (
    <PillarsContainer>
      <div className="p-container">
        <HeaderSpan header={header} description={description} />
        <ItemButtons isActive={isActive} setIsActive={setIsActive} buttonNames={buttonNames} />
        {dataPillars.filter(item => item.id === isActive).map((item, index) => (
          <Item
            key={index}
            image={item.image}
            header={item.header}
            description={item.description}
            subHeader={item.subHeader}
            subDescription={item.subDescription}
          />
        ))}
      </div>
    </PillarsContainer>
  )
}

export default Pillars