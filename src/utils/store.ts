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

export async function getApiUrl(
  setUrl: React.Dispatch<React.SetStateAction<string>>,
): Promise<void> {
  const url = await get(API_URL_KEY);
  setUrl(url);
}

export async function storeUserToken(
  userToken: string,
  setUserToken: React.Dispatch<React.SetStateAction<string>>,
): Promise<void> {
  await store(USER_TOKEN_KEY, userToken);
  setUserToken(userToken);
}

export async function getUserToken(
  setUserToken: React.Dispatch<React.SetStateAction<string>>,
): Promise<void> {
  const userToken = await get(USER_TOKEN_KEY);
  setUserToken(userToken);
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
