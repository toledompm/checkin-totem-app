import 'react-native-gesture-handler';
/*https://reactnavigation.org/docs/getting-started*/

import navigation from 'navigations';
import registration from 'scenes/registration';
import { getApiUrl } from 'utils/store';
import { useState } from 'react';

function getScreenToRender() {
  const [apiUrl, setApiUrl] = useState('');

  const fetchUrl = async () => {
    const apiUrl = await getApiUrl();
    if (apiUrl) {
      setApiUrl(apiUrl);
    }
  }

  fetchUrl();
  return (apiUrl !== '' ? navigation() : registration());
}

export default function App() {
  return getScreenToRender();
}
