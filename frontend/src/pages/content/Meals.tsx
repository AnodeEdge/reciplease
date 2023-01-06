interface Meal {
    title: string;
    type: string;
    filterValue: string[] | string;
    imgSource?: string;
  }
  
export const mealsOfTheDay: Meal[] = [
{
    type: 'mealType',
    filterValue: 'breakfest',
    title: 'Breakfest',
    imgSource: ''
}, {
    type: 'mealType',
    title: 'Lunch',
    imgSource: '',
    filterValue: 'lunch'
}, {
    type: 'mealType',
    title: 'Dinners',
    imgSource: '',
    filterValue: 'dinner'
}, {
    type: 'mealType',
    title: 'Desserts',
    imgSource: '',
    filterValue: 'snack'
}
]

export const healthyMeals: Meal[] = [
{
    type: 'health',
    title: 'Vegan',
    imgSource: '',
    filterValue: 'vegan',
}, {
    type: 'health',
    title: 'Vegetarian',
    imgSource: '',
    filterValue: 'vegetarian',
}, {
    type: 'health',
    title: 'Low Sugar',
    imgSource: '',
    filterValue: 'low-sugar',
}, {
    type: 'health',
    title: 'Nut Free',
    imgSource: '',
    filterValue: ['peanut-free', 'tree-nut-free']
}
]

export const dietMeals: Meal[] = [
{
    type: 'diet',
    title: 'Balanced',
    imgSource: '',
    filterValue: 'balanced',
}, {
    type: 'diet',
    title: 'High Protein',
    imgSource: '',
    filterValue: 'high-protein',
}, {
    type: 'diet',
    title: 'Low Carb',
    imgSource: '',
    filterValue: 'low-carb',
}, {
    type: 'diet',
    title: 'Low Fat',
    imgSource: '',
    filterValue: 'low-fat',
}
]

export const internationalMeals: Meal[] = [
{
    type: 'cuisineType',
    title: 'American',
    imgSource: '',
    filterValue: 'American',
}, {
    type: 'cuisineType',
    title: 'Asian',
    imgSource: '',
    filterValue: 'Asian',
}, {
    type: 'cuisineType',
    title: 'French',
    imgSource: '',
    filterValue: 'French',
}, {
    type: 'cuisineType',
    title: 'Hungarian',
    imgSource: '',
    filterValue: 'Hungarian',
}, {
    type: 'cuisineType',
    title: 'Indian',
    imgSource: '',
    filterValue: 'Indian',
}, {
    type: 'cuisineType',
    title: 'Italian',
    imgSource: '',
    filterValue: 'Italian',
}, {
    type: 'cuisineType',
    title: 'Mexican',
    imgSource: '',
    filterValue: 'Mexican',
}, {
    type: 'cuisineType',
    title: 'Persian',
    imgSource: '',
    filterValue: 'Persian',
}
]

