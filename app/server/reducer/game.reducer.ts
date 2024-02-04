import { IGame } from "../../interface/Game";
import { Action } from "../../types/props.types";

import { GENERATE_GAME } from "../constants/game.const";

import { initialState } from "../value/game.value";

const gameReducer = (state: IGame = initialState, action: Action): IGame | any => {

    switch (action.type) {
        case GENERATE_GAME:
            return {
                ...state,
                questions: action.payload,
                corrects: 0
            }

        default:
            break;
    }

}

export default gameReducer