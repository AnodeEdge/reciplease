import React from 'react'
import '../styles/Cards.css'

interface Props {
    title: string;
    type: string;
    filterValue: string[] | string;
    imgSource?: string;
    alt?: string;
    updateSearchFilters: any;

}

const FilterCard: React.FC<Props> = ({ title, imgSource, alt, type, filterValue, updateSearchFilters }) => {

    const generateKey = (): string => {
        return (typeof (filterValue) === 'string')
            ? type + filterValue
            : type + filterValue[0]
    }

    // const handleClick: React.MouseEventHandler = () => {
    //     console.log({[type]: filterValue})
    //     updateSearchFilters({[type]: filterValue})

    // }

    return (
        <div className="card"
            key={generateKey()}
            id={generateKey()}
            // onClick={handleClick}
            >
            <img src={imgSource} alt={alt} />
            <div className="container">
                <h4><b>{title}</b></h4>
                <p></p>
            </div>
        </div>
    )
}

export default FilterCard