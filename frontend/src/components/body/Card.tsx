import React from 'react'
import '../styles/Cards.css'

interface Props {
    title: string;
    imgSource?: string; 
    alt?: string;
    dummyFunc?: (name: string, another: boolean) => boolean;
}

const Card: React.FC<Props> = ({title, imgSource, alt}) => {
    return (
    <>
        <div className="card">
        <img src={imgSource} alt={alt} />
                <div className="container">
                    <h4><b>{title}</b></h4>
                    <p></p>
                </div>
        </div>
    </>
    )
}

export default Card