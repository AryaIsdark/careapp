export enum ActionTypes {
    SET_DATA = 'searchResults/setData',
    SET_LOADING = 'searchResults/setLoading',
    SET_HAS_ERROR = 'searchResults/setHasError'
}

export interface SearchResultsState {
    isLoading: boolean,
    hasError : boolean,
    data : any
}

export interface Action {
    type: ActionTypes;
    payload: Partial<SearchResultsState>;
}
  