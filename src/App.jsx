import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";
import SingleRoom from "./pages/SingleRoom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/single-room" element={<SingleRoom />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
