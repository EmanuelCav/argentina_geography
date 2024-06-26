import { HelpType } from "../types/key.props";
import { StackNavigation } from "../types/props.types";

import { ICategory } from "./Game";

export interface IUser {
    amountOptions: number;
    amountQuestions: number;
    helps: number;
    categories: ICategory[];
    isAdd: boolean;
    optionsAction?: (optionData: IOptionUser, navigation: StackNavigation) => void;
    categoryAction?: (category: ICategory[]) => void;
    userAction?: (data: IUser) => void;
    categoryAllAction?: (isSelect: boolean) => void;
    helpsAction?: (type: HelpType) => void;
}

export interface IOptionUser {
    amountOptions: number;
    amountQuestions: number;
}

export interface ITent {
    title: string;
    description: string;
    price: number;
    quantity: number;
}