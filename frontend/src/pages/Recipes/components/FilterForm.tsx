import React from 'react'
import SearchInput from './SearchInput'
import Select from 'react-select'
import { RecipeParams } from '../../../types'
import { dietOptions, healthOptions, Option } from '../content/FilterOptions'

interface Props {
  setSearchQuery: Function
  handleSearch: Function
  updateSearchFilters: Function
  searchFilters: RecipeParams
}

const FilterForm: React.FC<Props> = ({ setSearchQuery, handleSearch, updateSearchFilters, searchFilters }) => {

  const handleSelectChange = (type: string, selectedOptions: any) => {
    if (!Array.isArray(selectedOptions)) selectedOptions = [selectedOptions]
    if (selectedOptions.length === 1) {
      updateSearchFilters({ [type]: selectedOptions[0].value })
    } else if (selectedOptions.length > 1) {
      const selectedOptionsArray: string[] = []
      selectedOptions.forEach((option: Option) => {
        selectedOptionsArray.push(option.value)
      })
      updateSearchFilters({ [type]: selectedOptionsArray })
    } else {
      updateSearchFilters({ [type]: undefined })
    }
  }

  return (
    <>
      <Select
        isMulti
        options={healthOptions}
        isClearable
        name={"healthOptions"}
        placeholder={'Health Options'}
        onChange={(selected) => handleSelectChange('health', selected)}
        // defaultValue={createDefaultValue('health')}
      />
      <Select
        options={dietOptions}
        isClearable
        placeholder={'Diet Options'}
        name={"dietOptions"}
        onChange={(selected) => handleSelectChange('diet', selected)}
      />
      <SearchInput
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        searchFilters={searchFilters}
      />
    </>
  )
}

export default FilterForm

  // const createDefaultValue = (type: string): Option => {
  //   if (searchFilters[type as keyof RecipeParams]) {
  //     const selectedFilterValue: any = searchFilters[type as keyof RecipeParams]
  //     const selectedOptions = []
  //     const optionTypes: {} = {diet: dietOptions, health: healthOptions}
  //     if (!Array.isArray(selectedFilterValue)) {
  //       console.log(optionTypes[type as keyof Object])
  //       // selectedOptions.push(optionTypes[type as keyof Object].filter())
  //     } else {

  //     }
  //   }
  //   return {value: '0', label: '0', type: '0'}
  // }