import { IUser } from "../../interface/User";
import { Action } from "../../types/props.types";

import { SELECT_CATEGORY, UPDATE_OPTIONS, INITIALIZE_STATE, ACTION_CATEGORY, CHANGE_HELPS, PAYMENT } from "../constants/user.const";

import { initialState } from "../value/user.value";

const userReducer = (state: IUser = initialState, action: Action): IUser | any => {

    switch (action.type) {
        case INITIALIZE_STATE:
            return action.payload;

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

        case CHANGE_HELPS:
            return {
                ...state,
                helps: state.helps + action.payload
            }

        case PAYMENT:
            return {
                ...state,
                helps: state.helps + action.payload.quantity,
                isAdd: action.payload.isAdd
            }

        default:
            break;
    }

}

export default userReducer