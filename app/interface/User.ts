import { StackNavigation } from "../types/props.types";

import { ICategory } from "./Game";

export interface IUser {
    amountOptions: number;
    amountQuestions: number;
    categories: ICategory[];
    optionsAction?: (optionData: IOptionUser, navigation: StackNavigation) => void;
}

export interface IOptionUser {
    amountOptions: number;
    amountQuestions: number;
}