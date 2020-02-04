import { ActionTypes, Action } from './types'
import * as api from 'api/apiFunctions'
import { Dispatch } from 'react'
import { AppState } from 'store/rootReducer'
import * as selectors from './selectors'

export const loadData = (params: any) => async (dispatch: Dispatch<Action>, getState: () => AppState ) => {
    
    const currentParams = selectors.params(getState())

    dispatch(setHasError(false))
    dispatch(setIsLoading(true))
    dispatch(setParams({...currentParams, ...params}))
    try {
        const response: any = await api.search({...currentParams,params});
        dispatch({
            type: ActionTypes.SET_DATA,
            payload: { data: response.data },
        });
    } catch (err) {
        dispatch(setHasError(true));
    } finally {
        dispatch(setIsLoading(false));
    }
};


export const setIsLoading = (isLoading: boolean) => {
    return {
        type: ActionTypes.SET_LOADING,
        payload: { isLoading }
    }
}

export const setHasError = (hasError: boolean) => {
    return {
        type: ActionTypes.SET_HAS_ERROR,
        payload: { hasError }
    }
}

export const setParams = (params: any) => {
    return {
        type: ActionTypes.SET_PARAMS,
        payload: { params }
    }
}