import { api } from './client';
import partners from './partners.json'
import users from './users.json'

export const getProducts = (params = {}) =>
  api.get<any>('/api/v1/products', params);


export const getPosts = (params: any = {}) =>
  api.get<any>('/posts', params);


export const getPost = (id: string) =>
  api.get<any>(`/posts/${id}`);

export const getComments = (entityType: string, entityId: string) =>
  api.get<any>(`/${entityType}/${entityId}/comments`);

export const getMe = (userName: string) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: users.find((user: any) => user.userInfo.userName === userName)
      });
    }, Math.random() * 1000);
  });


export const search = (params: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: partners
      });
    }, Math.random() * 1000);
  });
}

export const canPurchase = (userId: string) => {
  if (userId === 'User1') {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: true
        });
      }, Math.random() * 1000);
    });
  }
  if (userId === 'User2') {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: false
        });
      }, Math.random() * 1000);
    });
  }
  else {
    return new Promise((reject) => {
      setTimeout(() => {
        reject({
          data: partners
        });
      }, Math.random() * 1000);
    });
  }
}
