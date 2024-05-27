import { Suspense, lazy } from "solid-js";
import "./app.css";
import { Route, Router } from "@solidjs/router";
import { getCar, getCars } from "./lib/cars";

const Cars = lazy(() => import("./pages/Cars"));
const ViewCar = lazy(() => import("./pages/ViewCar"));
const NewCar = lazy(() => import("./pages/NewCar"));

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
      <Route path="/" component={Cars} load={() => getCars()} />
      <Route
        path="cars/:id"
        component={ViewCar}
        load={(props) => getCar(+props.params.id)}
      />
      <Route path="/new" component={NewCar} />
    </Router>
  );
}
