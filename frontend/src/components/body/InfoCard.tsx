import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import "../styles/InfoCard.css"

interface Props {
    style?: string;
    title: string;
    paragraph: string;
    imageSource?: string;
    icon?: IconDefinition;
    iconStyle?: Object;
}

const InfoCard: React.FC<Props> = ({style, title, paragraph, imageSource, icon, iconStyle}) => {

    return (
    <>
        <div className="info-card">
            {icon 
                ? <FontAwesomeIcon size="5x" icon={icon} style={iconStyle}/>
                : <img src={imageSource} alt="info-card-img" className="center"></img>
            }
            <h3>{title}</h3>
            <p>{paragraph}.</p>
        </div>
    </>
  )
}

export default InfoCard