import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SetStateAction } from "react";

import { IOptionUser } from "../interface/User";
import { ICategory } from "../interface/Game";

type RouteType = {
    Home: undefined;
    Playing: undefined;
    Categories: undefined;
    Options: undefined;
}

export type StackNavigation = NativeStackNavigationProp<RouteType>

export type Action = {
    type: string;
    payload: any;
}

export type ButtonMenuPropsType = {
    text: string;
    func: () => void;
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