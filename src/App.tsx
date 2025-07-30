import { QueryClientProvider } from "@libs/query-client";
import { BrowserRouter, Navigate, Route, Routes } from "@libs/router";

import { ExamplesOverview } from "./features";

export const App = () => {
  return (
    <QueryClientProvider>
      <BrowserRouter>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h1>React Vite TS Boilerplate</h1>
          <Routes>
            <Route path="examples" element={<ExamplesOverview id="test" />} />
            <Route path="*" element={<Navigate to="/examples" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
