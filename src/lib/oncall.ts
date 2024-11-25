import { action, query, redirect } from "@solidjs/router";
import { storage, OnCallUser } from "./db";

export const getOnCall = query(async () => {
  "use server";
  return ((await storage.getItem("oncall:data")) as OnCallUser[]).reverse();
}, "onCall");

export const getOnCallById = query(async (id: number) => {
  "use server";
  return ((await storage.getItem("oncall:data")) as OnCallUser[]).find(
    (onCall) => onCall.id === id
  );
}, "onCall");

export const addOnCall = action(async (data: FormData) => {
  "use server";

  const onCallInput = {
    service: String(data.get("service")),
    user: String(data.get("user")),
    timeStart: new Date(String(data.get("timeStart"))),
    timeEnd: new Date(String(data.get("timeEnd"))),
  };

  let [{ value: onCallList }, { value: index }] = await storage.getItems([
    "oncall:data",
    "oncall:counter",
  ]);

  let onCall;
  await Promise.all([
    storage.setItem("oncall:data", [
      ...(onCallList as OnCallUser[]),
      (onCall = { ...onCallInput, id: index as number }),
    ]),
    storage.setItem("oncall:counter", (index as number) + 1),
  ]);
  return redirect("/");
});
