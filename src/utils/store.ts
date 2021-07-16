import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL_KEY = '@apiUrl';

export function storeApiUrl(url: string): Promise<void> {
  return store(API_URL_KEY, url);
}

export function getApiUrl(): Promise<string> {
  return get(API_URL_KEY);
}

async function store(key: string, data: any): Promise<void> {
  try {
    await AsyncStorage.setItem(key, data);
  } catch (error) {
    console.error(error);
    // need some sort of errorHandling, redirect or something
    throw error;
  }
}

async function get(key: string): Promise<any> {
  try {
    await AsyncStorage.getItem(key)
  } catch (error) {
    console.error(error);
    // need some sort of errorHandling, redirect or something
    throw error;
  }
}

