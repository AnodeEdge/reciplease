import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import '../styles/SearchBar.css'


interface Props {
    setSearchQuery: Function
    handleSearch: Function
}

const faPropIcon = FontAwesomeIcon

const SearchBar: React.FC<Props> = ({ setSearchQuery, handleSearch }: any) => {
    
    return (
        <>
            <form className="wrapper" onSubmit={(evt: React.FormEvent) => handleSearch(evt)}>
                <div className="label">Search through countless international recipes</div>
                <div className="searchBar">
                    <input
                        id="searchQueryInput"
                        type="text"
                        name="searchQueryInput"
                        placeholder="Recipe Search"
                        onChange={(evt) => setSearchQuery({q: evt.target.value})}
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