import { ICategory, IQuestion } from "../interface/Game"

export const generateGame = (questions: IQuestion[], amountQuestions: number, amountOptions: number): IQuestion[] => {

    for (let i = 0; i < amountQuestions; i++) {

        const options: IQuestion[] = shuffle(questions.filter(q => (q.category === questions[i].category) && (q.answer !== questions[i].answer)))
        const optionRandom = Math.floor(Math.random() * amountOptions)

        for (let j = 0; j < amountOptions; j++) {
            if(j === optionRandom) {
                questions[i].options.push(questions[i].answer)
            } else {
                questions[i].options.push(options[j].answer)
            }
        }

    }

    return questions

}

export const generateQuestions = (allQuestions: IQuestion[], categories: ICategory[]): IQuestion[] => {

    let avaibleQuestions: IQuestion[] = []

    for (let i = 0; i < categories.filter(c => c.isSelect).length; i++) {
        const filterQuestions: IQuestion[] = allQuestions.filter(q => q.category === categories[i].category)

        for (let j = 0; j < filterQuestions.length; j++) {
            avaibleQuestions.push(filterQuestions[j])
        }
    }

    return avaibleQuestions

}

export const shuffle = (array: any[]): any[] => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex > 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export const emptyOptions = (questions: IQuestion[]) => {
    for (let i = 0; i < questions.length; i++) {
        questions[i].options = []
    }
}
