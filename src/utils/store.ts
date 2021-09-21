import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL_KEY = '@apiUrl';
const USER_TOKEN_KEY = '@userToken';

export async function storeApiUrl(
  url: string,
  setUrl: React.Dispatch<React.SetStateAction<string>>,
): Promise<void> {
  await store(API_URL_KEY, url);
  setUrl(url);
}

export function getApiUrl(): Promise<string> {
  return get(API_URL_KEY);
}

export async function storeUserToken(
  userToken: string,
  setUserToken: React.Dispatch<React.SetStateAction<string>>,
): Promise<void> {
  await store(USER_TOKEN_KEY, userToken);
  setUserToken(userToken);
}

export function getUserToken(): Promise<string> {
  return get(USER_TOKEN_KEY);
}

async function store(key: string, data: any): Promise<void> {
  try {
    await AsyncStorage.setItem(key, data);
  } catch (error) {
    alert(error);
  }
}

async function get(key: string): Promise<any> {
  try {
    await AsyncStorage.getItem(key);
  } catch (error) {
    alert(error);
  }
}
