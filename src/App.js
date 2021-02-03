import logo from './logo.svg';
import './App.less';
import Layout from "./components/Layout/Layout"
import React, { useState } from "react"
import { Context } from "./context/Context.js";

function App() {
  const [context, setContext] = useState(null);

  return (
    <Context.Provider value={[context, setContext]}>
      <div className="App">
        <Layout />
      </div>
    </Context.Provider>
  );
}

export default App;
