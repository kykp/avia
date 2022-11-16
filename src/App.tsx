import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.module.scss";
import { Layout } from "./components/Layout/Layout";
import { NotFound } from "./pages/NotFound/NotFound";
import { Avia } from "./pages/Avia/Avia";
import { AviaInfo } from "./pages/AviaInfo/AviaInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="avia" replace />} />
          <Route path="avia" element={<Avia />} />
          <Route path="avia/info" element={<AviaInfo />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
