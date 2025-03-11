import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomeScreen from "./views/HomeScreen";

createRoot(document.getElementById("root")!).render(<HomeScreen />);
