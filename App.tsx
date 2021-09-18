import 'react-native-gesture-handler';
/*https://reactnavigation.org/docs/getting-started*/

import navigation from 'navigations';
import { useEffect, useState } from 'react';
import login from 'scenes/login';
import registerUrl from 'scenes/registration';
import * as Store from 'utils/store';

export default function App() {
  const [url, setUrl] = useState('');
  const [userToken, setUserToken] = useState('');

  const getApiUrl = async () => {
    const url = await Store.getApiUrl();
    setUrl(url);
  };

  const getUserToken = async () => {
    const token = await Store.getUserToken();
    setUserToken(token);
  };

  useEffect(() => {
    getApiUrl();
    getUserToken();
  }, []);

  if (!url) {
    return registerUrl(setUrl);
  }

  if (!userToken) {
    return login(url, setUserToken);
  }

  return navigation(url, userToken);
}
