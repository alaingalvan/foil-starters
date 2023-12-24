import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import HTML from "./html.tsx";
import "./css";
// 🖌️ Rely on server-side rendering and render later:
const node = <HTML router={BrowserRouter} />;
hydrateRoot(document, node);
