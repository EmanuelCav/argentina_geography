import { IUser } from "../../interface/User";
import { Action } from "../../types/props.types";

import { GET_USER } from "../constants/user.const";

import { initialState } from "../value/user.value";

const userReducer = (state: IUser = initialState, action: Action): IUser | any => {

    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
    
        default:
            break;
    }

}

export default userReducer