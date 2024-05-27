import { APIEvent } from "@solidjs/start/server";
import { addCar, getCars } from "~/lib/cars";

export const GET = (event: APIEvent) => {
  return getCars();
};

export const POST = async (event: APIEvent) => {
  const post = await addCar(await event.request.json());
  return new Response(JSON.stringify(post), { status: 201 });
};
