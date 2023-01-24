export type RecipeParams = {
    q?: string;
    diet?: string[] | string;
    health?: string[] | string;
    cuisineType?: string[] | string;
    mealType?: string[] | string;
    dishType?: string[] | string;
}

export type nutritionTabulation = {
    label: string
    daily: {
        quantity: number,
        unit: string
    }
    total: {
        quantity: number,
        unit: string
    }
}

export type dailyStats= {
    label: string
    quantity: number
    unit: string
}

export type totalStats = {
    label: string
    quantity: number
    unit: string
}

export type totalDaily = {
    CA: dailyStats
    CHOCDF: dailyStats
    CHOLE: dailyStats
    ENER_KCAL: dailyStats
    FASAT: dailyStats
    FAT: dailyStats
    FE: dailyStats
    FITBTG: dailyStats
    FOLDFE: dailyStats
    K: dailyStats
    MG: dailyStats
    NA: dailyStats
    NIA: dailyStats
    P: dailyStats
    PROCNT: dailyStats
    RIBF: dailyStats
    THIA: dailyStats
    TOCPHA: dailyStats
    VITA_RAE: dailyStats
    VITB6A: dailyStats
    VITB12: dailyStats
    VITC: dailyStats
    VITK1: dailyStats
    ZN: dailyStats
}

export type totalNutrients = {
    CA: totalStats
    CHOCDF: totalStats
    'CHOCDF.net': totalStats
    CHOLE: totalStats
    ENER_KCAL: totalStats
    FAMS: totalStats
    FAPU: totalStats
    FASAT: totalStats
    FAT: totalStats
    FATRN: totalStats
    FE: totalStats
    FITBTG: totalStats
    FOLAC: totalStats
    FOLDFE: totalStats
    FOLFD: totalStats
    K: totalStats
    MG: totalStats
    NA: totalStats
    NIA: totalStats
    P: totalStats
    PROCNT: totalStats
    RIBF: totalStats
    SUGAR: totalStats
    'SUGAR.added': totalStats
    'SUGAR.alcohol': totalStats
    THIA: totalStats
    TOCPHA: totalStats
    VITA_RAE: totalStats
    VITB6A: totalStats
    VITB12: totalStats
    VITC: totalStats
    VITK1: totalStats
    WATER: totalStats
    ZN: totalStats
}

type Recipe = {
    recipe: {
        uri: string
        label: string
        image: string
        images: {
            THUMBNAIL: {
                url: string
                width: string | number
                height: string | number
            }
            SMALL: {
                url: string
                width: string | number
                height: string | number
            }
            REGULAR: {
                url: string
                width: string | number
                height: string | number
            }
        }
        source: string
        url: string
        shareAs: string
        yield: number | string
        dietLabels: string[]
        healthLabels: string[]
        cautions: string[]
        ingredientLines: string[]
        ingredients: {
            text: string
            quantity: string | number
            measure: string
            food: string
            weight: string | number
            foodCategory: string
            foodId: string
            image: string
        }[]
        calories: string | number
        totalWeight: string | number
        totalTime: string | number
        cuisineType: string[]
        mealType: string[]
        dishType: string[]
        totalNutrients: {}
        totalDaily: {}
        digest: []
    }
    _links: {
        self: {
            href: string
            title: string
        }
    }
}


export type RecipeData = {
    hits?: Recipe[] | undefined
    _links?: {
        next?: {
            href: string,
            title: string
        }
    }
  }