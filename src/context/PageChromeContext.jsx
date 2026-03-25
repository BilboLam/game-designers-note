import { createContext, useContext } from 'react';

const PageChromeContext = createContext(null);

export function PageChromeProvider({ children, value }) {
  return <PageChromeContext.Provider value={value}>{children}</PageChromeContext.Provider>;
}

export function usePageChrome() {
  return useContext(PageChromeContext);
}
