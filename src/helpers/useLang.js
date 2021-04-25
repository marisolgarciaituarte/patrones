import { useState } from 'react';

const useLang = () => {
  const [langLoading] = useState(false);
  const [lang] = useState('es');

  return [langLoading, lang];
};

export default useLang;
