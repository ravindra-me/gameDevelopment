import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import AppContainer from "./screens/AppContainer/AppContainer";
function App() {
  return (
    <Routes>
      <Route path="/" element={<AppContainer />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
