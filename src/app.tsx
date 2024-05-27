import { Suspense } from "solid-js";
import "./app.css";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";

export default function App() {
  return (
    <Router
      root={(props) => (
        <main>
          <img src="/autovit_logo.svg" width={336} height={80}></img>
          <Suspense fallback="Loading...">{props.children}</Suspense>
        </main>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
