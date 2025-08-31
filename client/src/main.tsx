import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Get the root element
const rootElement = document.getElementById("root")!;

// Create the root with improved hydration options for faster initial load
const root = createRoot(rootElement);

// Render with concurrency features enabled for better performance
root.render(<App />);
