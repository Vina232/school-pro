import { createContext, useReducer } from "react";

export const initialState = {
  mode: "light",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      localStorage.setItem("mode", state.mode === "light" ? "dark" : "light");
      return {
        ...state,
        mode: action.payload || "",
      };
    }
  }
};

export const ThemeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    mode: localStorage.getItem("mode") || "light",
  });

  const value = {
    mode: state.mode,
    changeMode: (data) => {
      dispatch({ type: "ADD", payload: data });
    },
  };
  return (
    <ThemeContext.Provider value={value}> {children}</ThemeContext.Provider>
  );
};
