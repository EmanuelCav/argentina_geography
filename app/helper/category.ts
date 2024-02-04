import { ICategory } from "../interface/Game"

export const selectCategory = (categories: ICategory[], category: ICategory): ICategory[] => {

    const newCategories = categories.map((c) => c.category === category.category ? {
        category: category.category,
        isSelect: !category.isSelect
    } : c)

    return newCategories

}