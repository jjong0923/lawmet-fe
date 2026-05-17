import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import BaseLayout from "./Layout/BaseLayout";
import {
  AnalysisReportPage,
  AnalysisResultPage,
  EvidenceManagePage,
  SituationInputPage,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/situation" replace />} />
        <Route element={<BaseLayout />}>
          <Route path="/situation" element={<SituationInputPage />} />
          <Route path="/analysis/result" element={<AnalysisResultPage />} />
          <Route path="/analysis/report" element={<AnalysisReportPage />} />
          <Route path="/evidence" element={<EvidenceManagePage />} />
        </Route>
        <Route path="*" element={<Navigate to="/situation" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
