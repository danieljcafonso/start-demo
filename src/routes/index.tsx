import { RouteDefinition, createAsync } from "@solidjs/router";
import { For } from "solid-js";
import { getOnCall } from "~/lib/oncall";

export const route = {
  preload() {
    getOnCall();
  },
} satisfies RouteDefinition;

export default function OnCall() {
  const oncall = createAsync(() => getOnCall());

  return (
    <>
      <ul>
        <For each={oncall()}>
          {(oncall) => (
            <li>
              <a href={`/oncall/${oncall.id}`}>
                <h3>{oncall.service}</h3>
                <p>{oncall.user}</p>
                <p>
                  From{" "}
                  {`${new Date(
                    oncall.timeStart
                  ).toLocaleString()} to ${new Date(
                    oncall.timeEnd
                  ).toLocaleString()} `}
                </p>
              </a>
            </li>
          )}
        </For>
      </ul>
      <a href="/new">Add new user to oncall rotation...</a>
    </>
  );
}
