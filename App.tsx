import 'react-native-gesture-handler';
/*https://reactnavigation.org/docs/getting-started*/

import navigation from 'navigations';
import { useEffect, useState } from 'react';
import login from 'scenes/login';
import * as Store from 'utils/store';
import { API_URL } from 'utils/constants';

export default function App() {
  const [userToken, setUserToken] = useState('');
  const getUserToken = async () => {
    const token = await Store.getUserToken();
    setUserToken(token);
  };

  useEffect(() => {
    getUserToken();
  }, []);

  if (!userToken) {
    return login(API_URL, setUserToken);
  }

  return navigation(API_URL, userToken, setUserToken);
}
