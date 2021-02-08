import logo from './logo.svg';
import './App.less';
import Layout from "./components/Layout/Layout"
import React, { useState, useCallback } from "react"
import { Context } from "./context/Context.js";

function App() {
  const [state, setState] = useState({ category: null, league: null })

  const setContext = useCallback(
    updates => {
      setState({ ...state, ...updates })
    },
    [state, setState],
  )

  const getContextValue = useCallback(
    () => ({
      ...state,
      setContext,
    }),
    [state, setContext],
  )

  return (
    <Context.Provider value={getContextValue()}>
      <div className="App">
        <Layout />
      </div>
    </Context.Provider>
  );
}

export default App;
