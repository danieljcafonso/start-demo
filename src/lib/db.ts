import { createStorage } from "unstorage";
import fsLiteDriver from "unstorage/drivers/fs-lite";

export type OnCallUser = {
  id: number;
  service: string;
  user: string;
  timeStart: Date;
  timeEnd: Date;
};

export const storage = createStorage({
  driver: fsLiteDriver({
    base: "./data",
  }),
});

//init
storage.setItem("oncall:data", [
  {
    id: 0,
    service: "Messaging Queue",
    user: "Daniel Afonso",
    timeStart: new Date().setHours(0, 0, 0, 0),
    timeEnd: new Date().setHours(23, 59, 59, 999),
  },
  {
    id: 1,
    service: "Auth Service",
    user: "Afonso Daniel",
    timeStart: new Date().setHours(0, 0, 0, 0),
    timeEnd: new Date().setHours(23, 59, 59, 999),
  },
]);
storage.setItem("oncall:counter", 2);
