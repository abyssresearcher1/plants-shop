import { Route, Routes } from "react-router";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage";
import PlantsPage from "./pages/PlantsPage/PlantsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/Plants" element={<PlantsPage />} />
    </Routes>
  );
}

export default App;
