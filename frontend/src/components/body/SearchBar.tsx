import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import '../styles/SearchBar.css'


interface Props {
    setSearchQuery: React.Dispatch<React.SetStateAction<{}>>
}

const faPropIcon = FontAwesomeIcon

const SearchBar: React.FC<Props> = ({ setSearchQuery }: any) => {
    
    return (
        <>
            <form className="wrapper">
                <div className="label">Search through countless international recipes</div>
                <div className="searchBar">
                    <input
                        id="searchQueryInput"
                        type="text"
                        name="searchQueryInput"
                        placeholder="Recipe Search"
                        onChange={(evt) => setSearchQuery(evt.target.value)}
                    />
                    <button
                        id="searchQuerySubmit"
                        type="submit"
                        name="searchQuerySubmit">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </form>
        </>
    )
}

export default SearchBar