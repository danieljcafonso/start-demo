import {
  A,
  RouteDefinition,
  RouteSectionProps,
  createAsync,
} from "@solidjs/router";
import { Show } from "solid-js";
import { getCar } from "~/lib/cars";

export const route = {
  load({ params }) {
    getCar(+params.id);
  },
} satisfies RouteDefinition;

export default function ViewCar(props: RouteSectionProps) {
  const car = createAsync(() => getCar(+props.params.id));

  return (
    <Show when={car()}>
      {(car) => (
        <article>
          <h3>{`${car().brand} ${car().model}`}</h3>
          <small>Added {new Date(car().timestamp).toLocaleDateString()}</small>
          <p>{car().price} €</p>
          <p>{car().description}</p>
          <A href="/"> Go back </A>
        </article>
      )}
    </Show>
  );
}
