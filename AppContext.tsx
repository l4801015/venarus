import * as React from "react";
import { not } from "./utils";

export const HeaderMenuContext = React.createContext({});

type app = {
  initialLoad: boolean;
  isMenuOpen: boolean;
  width: any;
  height: any;
};

type Action = {
  type: "set dimensions" | "set menu state";
  payload: any;
};
type Dispatch = (action: Action) => void;
type State = {
  app: app;
};
type AppStateProviderProps = { children: React.ReactNode };

const AppState: State = {
  app: {
    initialLoad: true,
    isMenuOpen: false,
    width: 0,
    height: 0,
  },
};

const AppStateStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const AppStateReducer = (state: State, action: any ) => {
  switch (action.type) {
    case "set dimensions": {
      const newState = { ...state };
      const dimensions = action.payload;
      newState.app.width = dimensions.width;
      newState.app.height = dimensions.height;
      return {
        ...newState,
      };
    }
    case "set menu state": {
      const newState = { ...state };
      newState.app.isMenuOpen = action.payload.isMenuOpen;
      newState.app.initialLoad = newState.app.isMenuOpen;
      return {
        ...newState,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const AppStateProvider = ({ children }: AppStateProviderProps) => {
  const [state, dispatch] = React.useReducer(AppStateReducer, AppState);
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    <AppStateStateContext.Provider value={value}>
      {children}
    </AppStateStateContext.Provider>
  );
};

const useAppState = () => {
  const context = React.useContext(AppStateStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within a AppStateProvider");
  }
  return context;
};

export { AppStateProvider, useAppState };
