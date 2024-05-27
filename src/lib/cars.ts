"use server";
import { storage, Car } from "./db";

export const getCars = async () => {
  return ((await storage.getItem("cars:data")) as Car[]).reverse();
};

export const getCar = async (id: number) => {
  return ((await storage.getItem("cars:data")) as Car[]).find(
    (car) => car.id === id
  );
};

type CarInput = Pick<Car, "brand" | "model" | "description" | "price">;
export const addCar = async (carInput: CarInput) => {
  // const carInput = {
  //   brand: String(data.get("brand")),
  //   model: String(data.get("model")),
  //   description: String(data.get("description")),
  //   price: Number(data.get("price")),
  // };

  let [{ value: cars }, { value: index }] = await storage.getItems([
    "cars:data",
    "cars:counter",
  ]);

  let car;
  await Promise.all([
    storage.setItem("cars:data", [
      ...(cars as Car[]),
      (car = { ...carInput, id: index as number, timestamp: Date.now() }),
    ]),
    storage.setItem("cars:counter", (index as number) + 1),
  ]);
  return car;
};
