import { Show } from "solid-js";

const car = () => ({
  id: 1,
  brand: "Audi",
  model: "Guinea",
  description: "My car is cool, please buy it!",
  price: 30000,
  timestamp: Date.now(),
});

export default function ViewCar() {
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
