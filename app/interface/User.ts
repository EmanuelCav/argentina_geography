import { ICategory } from "./Game";

export interface IUser {
    amountOptions: number;
    amountQuestions: number;
    categories: ICategory[];
}