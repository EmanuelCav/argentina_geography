import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SetStateAction } from "react";

import { IOptionUser } from "../interface/User";
import { ICategory, IQuestion } from "../interface/Game";
import { RouteProp } from "@react-navigation/native";

export type RouteType = {
    Home: undefined;
    Playing: undefined;
    Categories: {
        isPlaying: boolean
    };
    Options: undefined;
    Statistics: undefined;
}

export type StackNavigation = NativeStackNavigationProp<RouteType>

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
    gameAction: (allQuestions: IQuestion[], categories: ICategory[], amountQuesions: number, amountOptions: number, navigation: StackNavigation) => void
}

export type GameStatisticsPropsType = {
    seconds: number;
    minutes: number;
    setSeconds: (seconds: number) => void;
    setMinutes: (minutes: number) => void;
    questions: number;
    numberQuestion: number;
}

export type TimePropsType = {
    seconds: number;
    minutes: number;
    setSeconds: (seconds: number) => void;
    setMinutes: (minutes: number) => void;
}

export type QuestionGameStatisticsPropsType = {
    questions: number, 
    numberQuestion: number
}