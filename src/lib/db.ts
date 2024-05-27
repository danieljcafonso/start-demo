import { createStorage } from "unstorage";
import fsLiteDriver from "unstorage/drivers/fs-lite";

export type Car = {
  id: number;
  brand: string;
  model: string;
  description: string;
  price: number;
  timestamp: number;
};

export const storage = createStorage({
  driver: fsLiteDriver({
    base: "./data",
  }),
});

//init
storage.setItem("cars:data", [
  {
    id: 0,
    brand: "Audi",
    model: "Guinea",
    description: "My car is cool, please buy it!",
    price: 30000,
    timestamp: Date.now(),
  },
  {
    id: 1,
    brand: "Ferrari",
    model: "Hedgehog",
    description: "Gotta go fast. Brrm brrm let's go",
    price: 100000,
    timestamp: Date.now(),
  },
]);
storage.setItem("cars:counter", 2);
