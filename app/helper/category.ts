import { ICategory } from "../interface/Game"

export const selectCategory = (categories: ICategory[], category: ICategory): ICategory[] => {

    const newCategories = categories.map((c) => c.category === category.category ? {
        category: category.category,
        isSelect: !category.isSelect,
        corrects: category.corrects,
        questions: category.questions
    } : c)

    return newCategories

}