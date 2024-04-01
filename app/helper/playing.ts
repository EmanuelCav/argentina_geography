import { ICategory, IQuestion } from "../interface/Game";
import { shuffle } from "./game";

export const countCategory = (categories: ICategory[], category: string): ICategory[] => {

    const categoryCount: ICategory[] = categories.map((c) => c.category === category ? {
        category: c.category,
        isSelect: c.isSelect,
        corrects: c.corrects,
        questions: c.questions += 1,
        isImage: c.isImage
    } : c)

    return categoryCount

}

export const correctCategory = (categories: ICategory[], category: string): ICategory[] => {

    const categoryCorrect: ICategory[] = categories.map((c) => c.category === category ? {
        category: c.category,
        isSelect: c.isSelect,
        corrects: c.corrects += 1,
        questions: c.questions,
        isImage: c.isImage
    } : c)

    return categoryCorrect

}

export const helpsOptions = (question: IQuestion, amountOptions: number): string[] => {

    const optionsFiltered = shuffle(question.options.filter(o => o !== question.answer)).slice(0, amountOptions / 2)

    return optionsFiltered

}