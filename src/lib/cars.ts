import { action, cache, redirect } from "@solidjs/router";
import { storage, Car } from "./db";

export const getCars = cache(async () => {
  "use server";
  return ((await storage.getItem("cars:data")) as Car[]).reverse();
}, "cars");

export const getCar = cache(async (id: number) => {
  "use server";
  return ((await storage.getItem("cars:data")) as Car[]).find(
    (car) => car.id === id
  );
}, "car");

export const addCar = action(async (data: FormData) => {
  "use server";

  const carInput = {
    brand: String(data.get("brand")),
    model: String(data.get("model")),
    description: String(data.get("description")),
    price: Number(data.get("price")),
  };

  let [{ value: posts }, { value: index }] = await storage.getItems([
    "cars:data",
    "cars:counter",
  ]);

  let post;
  await Promise.all([
    storage.setItem("cars:data", [
      ...(posts as Car[]),
      (post = { ...carInput, id: index as number, timestamp: Date.now() }),
    ]),
    storage.setItem("cars:counter", (index as number) + 1),
  ]);
  return redirect("/");
});
