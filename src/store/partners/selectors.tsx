import { AppState } from 'store/rootReducer';

export const isLoading = (state: AppState) => state.partners && state.partners.isLoading;

export const hasError = (state: AppState) => state.partners && state.partners.hasError;

export const params = (state: AppState) => state.partners.params;

export const data = (state: AppState) => state.partners && state.partners.data;
