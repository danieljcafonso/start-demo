import { createAsync } from "@solidjs/router";
import { For } from "solid-js";

export default function Cars() {
  const cars = createAsync(async () => (await fetch("/api/cars")).json());

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
