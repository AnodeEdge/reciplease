import React from 'react'
import Card from './Card'
import '../styles/Cards.css'


interface Props {
    cardData:{}
}



const CardWrapper:React.FC<Props> = ({cardData}:any) => {
  return (
    <>
    <div className='card-wrapper'>
        {cardData.map((data:any) => {
            <>
            {console.log(data.title)}
            <Card
                title={data.title}
                imgSource={data.imgSource}/>
            <p>{data.title}</p>
            <p>{data.imgSource}</p>
            </>
        })}
            
    </div>
    </>
  )
}

export default CardWrapper