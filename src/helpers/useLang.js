import { useReducer, useEffect } from 'react';

import langReducer from './langReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('lang')) || 'en';
};

const useLang = () => {
  const [lang, dispatch] = useReducer(langReducer, {}, init);

  useEffect(() => {
    localStorage.setItem('lang', JSON.stringify(lang));
  }, [lang]);

  return [lang, dispatch];
};

export default useLang;
