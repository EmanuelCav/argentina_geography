import { IUser } from "../../interface/User";
import { Action } from "../../types/props.types";

import { UPDATE_OPTIONS } from "../constants/user.const";

import { initialState } from "../value/user.value";

const userReducer = (state: IUser = initialState, action: Action): IUser | any => {

    switch (action.type) {
        case UPDATE_OPTIONS:
            return {
                ...state,
                amountOptions: action.payload.amountOptions,
                amountQuestions: action.payload.amountQuestions
            }

        default:
            break;
    }

}

export default userReducer