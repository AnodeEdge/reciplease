import React from 'react'
import Card from './Card'
import '../styles/Cards.css'


interface Props {
    cardData: any[];
    cardType?: string;
}


const CardWrapper: React.FC<Props> = ({ cardData }) => {
  return (
    <>
    <div className='card-wrapper'>
        {cardData.map((data: any) => {
            return(
            <>
              <Card
                title={data.title}
                imgSource={data.imgSource}/>
              </>
            )
        })}
            
    </div>
    </>
  )
}

export default CardWrapper