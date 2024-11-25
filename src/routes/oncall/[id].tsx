import {
  RouteDefinition,
  RouteSectionProps,
  createAsync,
} from "@solidjs/router";
import { Show } from "solid-js";
import { getOnCallById } from "~/lib/oncall";

export const route = {
  preload({ params }) {
    getOnCallById(+params.id);
  },
} satisfies RouteDefinition;

export default function ViewOnCall(props: RouteSectionProps) {
  const oncall = createAsync(() => getOnCallById(+props.params.id));

  return (
    <Show when={oncall()}>
      {(oncall) => (
        <article>
          <h3>{oncall().service}</h3>
          <p>{oncall().user}</p>
          <p>
            From{" "}
            {`${new Date(
              oncall().timeStart
            ).toLocaleTimeString()} to ${new Date(
              oncall().timeEnd
            ).toLocaleTimeString()} `}
          </p>
          <a href="/"> Go back </a>
        </article>
      )}
    </Show>
  );
}
