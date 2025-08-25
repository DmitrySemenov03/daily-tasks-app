import { useEffect, useState } from 'react';

export function useAppTheme(defaultTheme) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || defaultTheme;
  });

  // применяем тему к body и сохраняем в localStorage
  useEffect(() => {
    document.body.dataset.theme = theme; // <body data-theme="dark">
    localStorage.setItem('theme', theme);
  }, [theme]);

  // функция переключения
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}
