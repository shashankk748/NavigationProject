// RootStoreContext.js
import React, {createContext, useContext} from 'react';
import RootStore from './RootStore';

const RootStoreContext = createContext(RootStore);

export const useRootStore = () => useContext(RootStoreContext);

export const RootStoreProvider = ({children}: any) => {
  return (
    <RootStoreContext.Provider value={RootStore}>
      {children}
    </RootStoreContext.Provider>
  );
};
