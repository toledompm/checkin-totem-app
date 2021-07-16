import 'react-native-gesture-handler';
/*https://reactnavigation.org/docs/getting-started*/

import navigation from 'navigations';
import registration from 'scenes/registration';
import { getApiUrl } from 'utils/store';
import { useState } from 'react';

async function fetchUrl(setApiUrl: React.Dispatch<React.SetStateAction<string>>): Promise<void> {
  const foundApiUrl = await getApiUrl();
  if (foundApiUrl) {
    setApiUrl(foundApiUrl);
  }
}

function getScreenToRender() {
  const [apiUrl, setApiUrl] = useState('');

  fetchUrl(setApiUrl);
  return (apiUrl !== '' ? navigation() : registration());
}

export default function App() {
  return getScreenToRender();
}
