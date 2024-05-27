import { RouteSectionProps, createAsync } from "@solidjs/router";
import { Show } from "solid-js";

export default function ViewCar(props: RouteSectionProps) {
  const car = createAsync(async () =>
    (await fetch(`/api/cars/${props.params.id}`)).json()
  );

  return (
    <Show when={car()}>
      {(car) => (
        <article>
          <h3>{`${car().brand} ${car().model}`}</h3>
          <small>Added {new Date(car().timestamp).toLocaleDateString()}</small>
          <p>{car().price} €</p>
          <p>{car().description}</p>
          <a href="/"> Go back </a>
        </article>
      )}
    </Show>
  );
}
