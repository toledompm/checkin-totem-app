import 'react-native-gesture-handler';
/*https://reactnavigation.org/docs/getting-started*/

import navigation from 'navigations';
import { useEffect, useState } from 'react';
import registerUrl from 'scenes/registration';
import { getApiUrl } from 'utils/store';

export default function App() {
  const [url, setUrl] = useState('');
  useEffect(() => {getApiUrl(setUrl)}, []);
  return url ? navigation(url) : registerUrl(setUrl);  
}
