import { api } from './client';
import partners from './partners.json'

export const getPosts = (params: any = {}) =>
  api.get<any>('/posts', params);


export const getPost = (id: string) =>
  api.get<any>(`/posts/${id}`);

export const getComments = (entityType: string, entityId: string) =>
  api.get<any>(`/${entityType}/${entityId}/comments`);

export const getMe = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          userInfo: {
            id: 'test-id',
            name: 'test-user-name',
            lastName: 'test-user-last-name',
            userName: 'testuser',
            profilePicture: '',
            initials: 'TU'
          },
          packageInfo: {
            name: 'GOLD',
          },
          bookingInfo: {
            canBook: true,
            remaining: 2,
            totalBookingsThisMonth: 3,
            recentBookings: [
              {
                id: 'booking-id-1',
                title: 'Luxury Massage',
                date: '02-01-2020'
              },
              {
                id: 'booking-id-2',
                title: 'Cafe Norden',
                date: '17-01-2020'
              },
              {
                id: 'booking-id-2',
                title: 'Spa for two',
                date: '25-01-2020'
              }
            ]
          }
        }
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
