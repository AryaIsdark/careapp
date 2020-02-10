import { AppState } from 'store/rootReducer';

export const isLoading = (state: AppState) => state.me && state.me.isLoading;

export const hasError = (state: AppState) => state.me && state.me.hasError;

export const isMerchant = (state: AppState) => state.me && state.me.data.userInfo.userType === 'merchant' ? true : false;

export const isLoggedIn = (state: AppState) => state.me && state.me.data.userInfo.userName.length > 0;

export const data = (state: AppState) => state.me && state.me.data;