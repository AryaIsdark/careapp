export enum ActionTypes {
    SET_DATA = 'partners/setData',
    SET_LOADING = 'partners/setLoading',
    SET_HAS_ERROR = 'partners/setHasError',
    SET_PARAMS = 'partners/setParams',
    SET_CREATE_SUCCESS = 'partners/setCreateSuccess'
}

export interface PartnersState {
    isLoading: boolean,
    hasError : boolean,
    params : any,
    data : any, 
}

export interface Action {
    type: ActionTypes;
    payload: Partial<PartnersState>;
}
  