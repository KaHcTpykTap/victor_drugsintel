import React from 'react'
import { ItemTeamContainer } from './styles/ItemTeamStyles'

const ItemTeam = ({ image, name, position, description, linkedin }) => {
    return (
        <ItemTeamContainer>
            <img alt="" src={image} />
            <h3>{name}</h3>
            <div className='it-position'>{position}</div>
            <p>{description}</p>
{/*             <div className='it-icons'>
                <div>
                    <a href={linkedin}>
                        <div>in</div>
                    </a>
                </div>
                <div>in</div>
                <span class="material-icons">email</span>
            </div> */}
        </ItemTeamContainer>
    )
}

export default ItemTeam