import React, { createContext, useRef } from 'react';
import MainPage from "./pages/mainPage";

export const ProviderContext = createContext();
function App() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <>
    <ProviderContext.Provider value={{handleClick, ref}}>
      <MainPage />  
    </ProviderContext.Provider>
    </>
  );
};

export default App;
