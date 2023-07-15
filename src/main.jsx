import React from "react";
import ReactDOM from "react-dom/client";
import { createContext , useState} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./styles/index.scss";

export const server = "https://travler-backend.vercel.app";


export const Context = createContext({ isAuthenticated : false});


const AppWrapper = () => { 
    
  const [ isAuthenticated, setIsAuthenticated ] = useState(false) ;
  return  (
    <Context.Provider
    value={ {
      isAuthenticated,
       setIsAuthenticated}
     }>
    <App />
    </Context.Provider>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
      <AppWrapper></AppWrapper>

  </React.StrictMode>
);
