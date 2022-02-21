import { actionType } from "../action-type";

export const increment = (data) => {
    return {
        type: actionType.INCREMENT,
        payload: data
    };
};