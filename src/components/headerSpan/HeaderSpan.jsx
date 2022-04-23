import React from 'react'
import { HeaderSpanContainer } from './styles/HeaderSpanStyles'

const HeaderSpan = ({ header, description, topHeader }) => {
    return (
        <HeaderSpanContainer>
            {topHeader && <h4>{topHeader}</h4>}
            <h2>{header}</h2>
            <div className='span'></div>
            <div className='p-p'>
                {description && <p> {description} </p>}
            </div>
        </HeaderSpanContainer>
    )
}

export default HeaderSpan