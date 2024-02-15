import { ICategory, IQuestion } from "../interface/Game"

export const generateGame = (questions: IQuestion[], allQuestions: IQuestion[], amountQuestions: number, amountOptions: number): IQuestion[] => {

    for (let i = 0; i < amountQuestions; i++) {

        const options: IQuestion[] = shuffle(allQuestions.filter(q => (q.category === questions[i].category) && (q.answer !== questions[i].answer)))

        const optionRandom = Math.floor(Math.random() * amountOptions)

        if (questions[i].options.length > 0) continue

        for (let j = 0; j < amountOptions; j++) {

            if (j === optionRandom) {
                questions[i].options.push(questions[i].answer)
            } else {
                questions[i].options.push(options[j].answer)
            }
        }

    }

    return questions

}

export const generateQuestions = (allQuestions: IQuestion[], categories: ICategory[], amountQuestions: number): IQuestion[] => {

    let avaibleQuestions: IQuestion[] = []

    for (let i = 0; i < categories.filter(c => c.isSelect).length; i++) {
        const filterQuestions: IQuestion[] = allQuestions.filter(q => (q.category === categories.filter(c => c.isSelect)[i].category) && q.isAnswer)

        for (let j = 0; j < filterQuestions.length; j++) {
            avaibleQuestions.push(filterQuestions[j])
        }
    }

    console.log(avaibleQuestions.length);
    
    if (avaibleQuestions.length < amountQuestions) {

        let copyAvaibleQuestions = [...avaibleQuestions]

        for (let i = 0; i < (amountQuestions - avaibleQuestions.length); i++) {
            copyAvaibleQuestions.push(shuffle(avaibleQuestions)[i])
        }

        return copyAvaibleQuestions

    }

    return shuffle(avaibleQuestions).slice(0, amountQuestions)

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
