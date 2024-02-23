import { IUser } from "../../interface/User";
import { Action } from "../../types/props.types";

import { SELECT_CATEGORY, UPDATE_OPTIONS, USER, ACTION_CATEGORY } from "../constants/user.const";

import { initialState } from "../value/user.value";

const userReducer = (state: IUser = initialState, action: Action): IUser | any => {

    switch (action.type) {
        case UPDATE_OPTIONS:
            return {
                ...state,
                amountOptions: action.payload.amountOptions,
                amountQuestions: action.payload.amountQuestions
            }

        case SELECT_CATEGORY:
            return {
                ...state,
                categories: action.payload
            }

        case USER:
            return {
                ...state,
                amountOptions: action.payload.amountOptions,
                amountQuestions: action.payload.amountQuestions,
                categories: action.payload.categories
            }

        case ACTION_CATEGORY:
            return {
                ...state,
                categories: state.categories.map((c) => c.isSelect !== action.payload ? {
                    category: c.category,
                    corrects: c.corrects,
                    questions: c.questions,
                    isSelect: action.payload
                } : c)
            }

        default:
            break;
    }

}

export default userReducer