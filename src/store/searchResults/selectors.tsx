import { AppState } from 'store/rootReducer';

export const isLoading = (state: AppState) => state.searchResults && state.searchResults.isLoading;

export const hasError = (state: AppState) => state.searchResults && state.searchResults.hasError;

export const params = (state: AppState) => state.searchResults.params;

export const data = (state: AppState) => state.searchResults && state.searchResults.data;