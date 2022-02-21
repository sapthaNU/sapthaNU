import { actionType } from "../action-type";

const initialState = 0;

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.INCREMENT:
            return state + 1;
        case actionType.DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

export default counterReducer;