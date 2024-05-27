import { Suspense } from "solid-js";
import "./app.css";
import { Route, Router } from "@solidjs/router";

import Cars from "./pages/Cars";
import ViewCar from "./pages/ViewCar";
import NewCar from "./pages/NewCar";

export default function App() {
  return (
    <main>
      <img src="/autovit_logo.svg" width={336} height={80}></img>
      <Cars />
    </main>
    // <Router
    //   root={(props) => (
    //     <main>
    //       <img src="/autovit_logo.svg" width={336} height={80}></img>
    //       <Suspense fallback="Loading...">{props.children}</Suspense>
    //     </main>
    //   )}
    // >
    //   <Route path="/" component={Cars} />
    //   <Route path="cars/:id" component={ViewCar} />
    //   <Route path="/new" component={NewCar} />
    // </Router>
  );
}
