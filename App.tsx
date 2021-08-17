import 'react-native-gesture-handler';
/*https://reactnavigation.org/docs/getting-started*/

import navigation from 'navigations';
import { useEffect, useState } from 'react';
import login from 'scenes/login';
import registerUrl from 'scenes/registration';
import { getApiUrl, getUserToken } from 'utils/store';

export default function App() {
  const [url, setUrl] = useState('');
  const [userToken, setUserToken] = useState('');
  useEffect(() => {
    getApiUrl(setUrl);
    getUserToken(setUserToken);
  }, []);

  if (!url) {
    return registerUrl(setUrl);
  }

  if (!userToken) {
    return login(url, setUserToken);
  }

  return navigation(url, userToken);
}
