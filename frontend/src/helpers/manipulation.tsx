import { dailyStats, totalStats, nutritionTabulation } from '../types'
import { mapKeys, memoize } from 'lodash'

const tabulateNutrition = memoize((focusRecipeData)=> {
    const nutritionTabulation:nutritionTabulation[] = []
    if (focusRecipeData) {
      mapKeys(focusRecipeData.totalDaily, (value: dailyStats, key) => {
        const totalData: totalStats = focusRecipeData.totalNutrients[key as keyof {}]
        const newObj:nutritionTabulation = {
          label: value.label,
          daily: {quantity: value.quantity, unit: value.unit},
          total: {
            quantity: totalData.quantity, 
            unit: totalData.unit
          }}
        nutritionTabulation.push(newObj)
      })
      console.log(nutritionTabulation)
      return nutritionTabulation
    }
    else {
      return null
    }
  })

export { tabulateNutrition }