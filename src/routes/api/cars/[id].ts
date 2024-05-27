import { APIEvent } from "@solidjs/start/server";
import { getCar } from "~/lib/cars";

export const GET = (event: APIEvent) => {
  return getCar(+event.params.id);
};
