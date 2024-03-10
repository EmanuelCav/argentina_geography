import { StackNavigation } from "../types/props.types";

export interface ICategory {
    category: string;
    isSelect: boolean;
    corrects: number;
    questions: number;
    isImage: boolean;
}

export interface IGame {
    questions: IQuestion[];
    gameAction?: (allQuestions: IQuestion[], categories: ICategory[], amountQuesions: number, amountOptions: number, navigation: StackNavigation, isConnection: boolean) => void;
}

export interface IQuestion {
    question: string;
    image?: string;
    options: string[];
    category: string;
    text?: string;
    answer: string;
    isAnswer: boolean;
}