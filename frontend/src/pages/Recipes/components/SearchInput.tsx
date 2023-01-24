import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import '../styles/SearchBar.css'
import { RecipeParams } from '../../../types'

interface Props {
    setSearchQuery: Function
    handleSearch: Function
    searchFilters: RecipeParams
}

// const faPropIcon = FontAwesomeIcon

const SearchInput: React.FC<Props> = ({ setSearchQuery, handleSearch, searchFilters }: any) => {
    
    return (
        <>
            <form className="wrapper" onSubmit={(evt: React.FormEvent) => handleSearch(evt)}>
                <div className="searchBar">
                    <input
                        id="searchQueryInput"
                        type="text"
                        name="searchQueryInput"
                        placeholder="Recipe Search"
                        value={searchFilters.q}
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

export default SearchInput