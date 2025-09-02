import { QueryClientProvider } from "@libs/query-client";
import { BrowserRouter, Navigate, Route, Routes } from "@libs/router";

import { ExamplesOverview, Placeholders } from "./features";
import { AppHeader } from "./AppHeader";

export const App = () => {

  return (
    <QueryClientProvider>
      <BrowserRouter>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <AppHeader />
          <Routes>
            <Route path="placeholders" element={<Placeholders />} />
            <Route path="examples" element={<ExamplesOverview id="test" />} />
            <Route path="*" element={<Navigate to="/examples" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
