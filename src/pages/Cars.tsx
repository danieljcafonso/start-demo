import { For } from "solid-js";

const cars = () => [
  {
    id: 1,
    brand: "Audi",
    model: "Guinea",
    description: "My car is cool, please buy it!",
    price: 30000,
    timestamp: Date.now(),
  },
  {
    id: 2,
    brand: "Ferrari",
    model: "Hedgehog",
    description: "Gotta go fast. Brrm brrm let's go",
    price: 100000,
    timestamp: Date.now(),
  },
];

export default function Cars() {
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
