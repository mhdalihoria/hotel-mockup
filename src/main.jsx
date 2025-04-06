import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import RoomPageLayout from "./layouts/RoomPageLayout.jsx";
import SingleRoom from "./SingleRoom.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/single-room" element={<SingleRoom />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
