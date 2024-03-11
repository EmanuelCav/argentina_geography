import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SetStateAction } from "react";

import { IOptionUser } from "../interface/User";
import { ICategory, IQuestion } from "../interface/Game";
import { RouteProp } from "@react-navigation/native";

export type RouteType = {
    Home: undefined;
    Playing: {
        isConnection: boolean;
    };
    Categories: {
        isPlaying: boolean
    };
    Options: undefined;
    Statistics: undefined;
}

export type StackNavigation = NativeStackNavigationProp<RouteType>;

export type PlayingType = {
    route: RouteProp<RouteType, 'Playing'>;
    navigation: StackNavigation;
}

export type CategoriesType = {
    route: RouteProp<RouteType, 'Categories'>;
    navigation: StackNavigation;
}

export type Action = {
    type: string;
    payload: any;
}

export type ButtonMenuPropsType = {
    text: string;
    func: () => void;
}


export type ButtonAcceptPropsType = {
    text: string;
    func: () => void;
    isCategory: boolean;
}

export type AmountQuestionsPropsType = {
    amountQuestions: number;
    setOptionsUser: (optionsUser: SetStateAction<IOptionUser>) => void;
}

export type AmountOptionsPropsType = {
    amountOptions: number;
    setOptionsUser: (optionsUser: SetStateAction<IOptionUser>) => void;
}

export type ButtonOptionsPropsType = {
    text: string;
    amountOptions: number;
    func: (number: number) => void;
}

export type ShowCategoriesPropsType = {
    categoryAction: (categories: ICategory[]) => void;
    categories: ICategory[];
}

export type CategoryPropsType = {
    categoryAction: (categories: ICategory[]) => void;
    categories: ICategory[];
    category: ICategory;
}

export type MenuPropsType = {
    categories: ICategory[];
    navigation: StackNavigation;
    amountOptions: number;
    amountQuestions: number;
    gameAction: (allQuestions: IQuestion[], categories: ICategory[], amountQuesions: number, amountOptions: number, navigation: StackNavigation, isConnection: boolean) => void;
    handleChangeView: () => void;
    isConnection: boolean;
}

export type GameStatisticsPropsType = {
    seconds: number;
    minutes: number;
    setSeconds: (seconds: number) => void;
    setMinutes: (minutes: number) => void;
    questions: number;
    numberQuestion: number;
    realSeconds: number; 
    realMinutes: number;
    isCorrect: boolean; 
    isIncorrect: boolean; 
    isFinish: boolean; 
    isPreFinish: boolean;
}

export type TimePropsType = {
    seconds: number;
    minutes: number;
    setSeconds: (seconds: number) => void;
    setMinutes: (minutes: number) => void;
    realSeconds: number; 
    realMinutes: number;
    isCorrect: boolean; 
    isIncorrect: boolean; 
    isFinish: boolean; 
    isPreFinish: boolean;
}

export type QuestionGameStatisticsPropsType = {
    questions: number, 
    numberQuestion: number
}

export type OptionPropsTypes = {
    option: string;
    amountOptions: number;
    nextQuestion: (value: string) => void;
}

export type SectionOptionsPropsTypes = {
    options: string[]
    amountOptions: number;
    nextQuestion: (value: string) => void;
}

export type AnswerPropsType = {
    answer: boolean;
    correctAnswer: string;
    continueGame: () => void;
}

export type FinishPropsType = {
    seconds: number; 
    minutes: number; 
    corrects: number; 
    questions: number;
    showErrors: () => void; 
    continueHome : () => void;
    isGameError: boolean;
}

export type StatisticsFinishPropsType = {
    seconds: number; 
    minutes: number; 
    corrects: number; 
    questions: number;
}

export type ActionsFinishPropsType = {
    areErrors: boolean;
    showErrors: () => void; 
    continueHome : () => void;
}

export type ActionCategoryPropsType = {
    text: string; 
    changeAllCategory: (isSelect: boolean) => void;
    isSelect: boolean;
}