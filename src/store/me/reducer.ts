import { ActionTypes, Action } from './types';

const initialState = {
    isLoading: false,
    hasError: false,
    data: {
        userInfo : {
            name: '',
            lastName: '',
            userName : '',
            profilePicture: '',
            initials : '',
            userType: ''
        },
        packageInfo: {
            name: '',
        },
        bookingInfo: {
            canBook: false,
            remaining: 0,
            recentBookings: []
        }
    }
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

        default:
            return state;
    }
};

export default reducer;
