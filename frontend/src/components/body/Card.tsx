import React from 'react'
import '../styles/Cards.css'

interface Props {
    title: string,
    imgSource?: string 
    alt?: string
}

const Card: React.FC<Props> = ({title, imgSource, alt}) => {
    return (
    <>
        {console.log(title)}
        <p>{title}</p>
        {/* <div className="card">
        <img src={imgSource} alt={alt} />
                <div className="container">
                    <h4><b>{title}</b></h4>
                    <p></p>
                </div>
        </div> */}
    </>
    )
}

export default Card