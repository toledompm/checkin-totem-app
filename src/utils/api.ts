import axios, { AxiosResponse } from 'axios';

export async function checkin(userCheckinToken: string, url: string, authToken: string): Promise<AxiosResponse<any>> {
  const apiInstance = axios.create({
    baseURL: url,
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    },
  });
  return apiInstance.post('/checkin', { refreshToken: userCheckinToken });
}