import "./index.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import QueryRouterApp from "./core/route/QueryRouterApp";

// Render our app!
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryRouterApp />
    </StrictMode>
  );
}
