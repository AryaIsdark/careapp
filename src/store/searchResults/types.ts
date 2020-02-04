export enum ActionTypes {
    SET_DATA = 'searchResults/setData',
    SET_LOADING = 'searchResults/setLoading',
    SET_HAS_ERROR = 'searchResults/setHasError',
    SET_PARAMS = 'searchResults/setParams'
}

export interface SearchResultsState {
    isLoading: boolean,
    hasError : boolean,
    params : any,
    data : any
}

export interface Action {
    type: ActionTypes;
    payload: Partial<SearchResultsState>;
}
  