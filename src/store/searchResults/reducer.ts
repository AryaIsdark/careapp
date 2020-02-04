import { ActionTypes, Action } from './types';

const initialState = {
    isLoading: false,
    hasError: false,
    params: {},
    data: []
};

export const reducer = (
    state = initialState,
    action: Action,
) => {
    const { type, payload } = action;
    switch (type) {
        case ActionTypes.SET_LOADING:
            return {
                ...state,
                isLoading: payload.isLoading,
            };
        case ActionTypes.SET_DATA:
            return {
                ...state,
                data: payload.data
            };
        case ActionTypes.SET_HAS_ERROR:
            return {
                ...state,
                hasError: payload.hasError,
            };
        case ActionTypes.SET_PARAMS:
            return {
                ...state,
                params: payload.params
            };

        default:
            return state;
    }
};

export default reducer;
