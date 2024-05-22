import { RouteDefinition, createAsync } from "@solidjs/router";
import { For, createEffect } from "solid-js";
import { getCars } from "~/lib/cars";

export const route = {
  load() {
    getCars();
  },
} satisfies RouteDefinition;

export default function Cars() {
  const cars = createAsync(() => getCars());

  createEffect(() => console.log(cars()));
  return (
    <>
      <ul>
        <For each={cars()}>
          {(car) => (
            <li>
              <a href={`/cars/${car.id}`}>
                <h3>{`${car.brand} ${car.model}`}</h3>
                <small>
                  Added {new Date(car.timestamp).toLocaleDateString()}
                </small>
                <p>{car.price} €</p>
                <p>{car.description}</p>
              </a>
            </li>
          )}
        </For>
      </ul>
      <a href="/new">Add new car...</a>
    </>
  );
}
