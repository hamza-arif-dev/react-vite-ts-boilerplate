import { useNavigate } from "react-router-dom";
import { Button } from "@libs/design";

export const AppHeader = () => {
  const navigate = useNavigate();

  return <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
  <h1>React Vite TS Boilerplate</h1>
  <Button onClick={() => navigate("/placeholders")}>
  Placeholders
  </Button>
  <Button onClick={() => navigate("/examples")}>
  Examples
  </Button>
  </div>;
}