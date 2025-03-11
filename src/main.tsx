import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomeScreen from "./views/HomeScreen";
import "./css/main.css";

createRoot(document.getElementById("root")!).render(<HomeScreen />);
