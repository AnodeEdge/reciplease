import React from 'react'
import { useNavigate, createSearchParams } from 'react-router-dom'
import SearchBar from './SearchBar';


interface Props {
  keyData?: string;
  image?: string;
  title?: string;
  id: number
  setSelectedRecipe: React.Dispatch<React.SetStateAction<number | undefined>>;
}



const DisplayTile: React.FC<Props> = ({keyData, image, title, id, setSelectedRecipe}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    setSelectedRecipe?.(id)
    const params = '?' + createSearchParams({id: String(id)})
    navigate({pathname: '/recipe', search: params})
  }

  return (
    <div onClick={handleClick} key={keyData}>
      <img src={image} alt="food"/>
        <div className="container">
          <h4><b>{title}</b></h4>
          <p></p>
        </div>
    </div> )
}

export default DisplayTile