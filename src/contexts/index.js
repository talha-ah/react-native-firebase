import React from 'react';
import { useContext, createContext, useReducer } from 'react';

import {
  NotificationTypes,
  NotificationReducer,
  NotificationInitialState,
} from './reducer';

const combineReducers = (slices) => (prevState, action) =>
  Object.keys(slices).reduce(
    (nextState, nextProp) => ({
      ...nextState,
      [nextProp]: slices[nextProp](prevState[nextProp], action),
    }),
    prevState
  );

const AppReducer = combineReducers({
  notifications: NotificationReducer,
});

const AppInitialState = {
  notifications: NotificationInitialState,
};

export const AppContext = createContext({
  state: AppInitialState,
  dispatch: (arg1) => undefined,
});

export const AppProviderHOC = (Component) => {
  return (props) => {
    const [state, dispatch] = useReducer(AppReducer, AppInitialState);

    return (
      <AppContext.Provider value={{ state, dispatch }}>
        <Component {...props} state={state} dispatch={dispatch} />
      </AppContext.Provider>
    );
  };
};

export { NotificationTypes };

export const useAppContext = () => useContext(AppContext);
