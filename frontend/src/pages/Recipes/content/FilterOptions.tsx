export interface Option {
    value: string
    label: string
    type: string
}

export const dietOptions: Option[] = [
    { value: 'balanced', label: 'Balanced', type: 'diet' },
    { value: 'high-protein', label: 'High Protein', type: 'diet' },
    { value: 'low-carb', label: 'Low Carb', type: 'diet' },
    { value: 'low-fat', label: 'Low Fat', type: 'diet' },
]

export const healthOptions: Option[] = [
    { value: 'vegan', label: 'Vegan', type: 'health' },
    { value: 'vegetarian', label: 'Vegetarian', type: 'health' },
    { value: 'sugar-conscious', label: 'Sugar Conscious', type: 'health' },
    { value: 'peanut-free', label: 'Peanut Free', type: 'health' },
    { value: 'tree-nut-free', label: 'Tree Nut Free', type: 'health' },
    { value: 'gluten-free', label: 'Gluten Free', type: 'health' },
    { value: 'dairy-free', label: 'Dairy Free', type: 'health' },
]

