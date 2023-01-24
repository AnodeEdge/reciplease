import React from 'react'
import FilterCard from './FilterCard'
import '../styles/Cards.css'


interface Props {
  cardData: any[];
  cardType?: string;
  handleFilterClick?: any
}


const FilterCardWrapper: React.FC<Props> = ({ cardData, cardType, handleFilterClick,  }) => {
  return (
    <>
      <div className='card-wrapper' key={cardType} id={cardType}>
        {cardData.map((data: any) => {
          return (
            <FilterCard
              type={data.type}
              title={data.title}
              imgSource={data.imgSource}
              filterValue={data.filterValue}
              handleFilterClick={handleFilterClick}
            />

          )
        })}

      </div>
    </>
  )
}

export default FilterCardWrapper