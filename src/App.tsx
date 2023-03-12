import { Route, Routes } from "react-router-dom";
import Layout from "@containers/Layout";
import Home from "@pages/Home";
import Login from "@pages/Login";
import "./styles/Global.css";
import AppContext from "./context/AppContext";
import useInitialState from "./hooks/useInitialState";

function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
