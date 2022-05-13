import React, { useState } from 'react';
import { NavPanelContainer } from './styles/NavPanelStyles';

const NavPanel = () => {


    const [indexColor, setIndexColor] = useState(0);

    const items = ['1. Intro', '2. Incentives and Reinbursement', '3 . Associated Drugs Registrations', '4. Epidemiological Data', '5. KOL Journal and Authors',
        '6. Most Cited Articles', '7. Anual Incidence Estimations', '8. Disease Information Rate', '9. Overall Countries Rate'
    ]

    return (
        <NavPanelContainer indexColor={indexColor}>
            {items.map((item, index) => <div
                className={index === indexColor ? 'np active' : 'np inactive'}
                key={index}
                onClick={() => setIndexColor(index)}
            >{item}</div>)
            }
        </NavPanelContainer>
    )
}

export default NavPanel;