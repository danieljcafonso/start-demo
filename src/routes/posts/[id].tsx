import {
  RouteDefinition,
  RouteSectionProps,
  createAsync,
} from "@solidjs/router";
import { Show } from "solid-js";
import { getPost } from "~/lib/posts";

export const route = {
  load({ params }) {
    getPost(+params.id);
  },
} satisfies RouteDefinition;

export default function ViewPost(props: RouteSectionProps) {
  const post = createAsync(() => getPost(+props.params.id));

  return (
    <Show when={post()}>
      {(post) => (
        <article>
          <h3>{post().title}</h3>
          <small>{new Date(post().timestamp).toLocaleDateString()}</small>
          <p>{post().caption}</p>
        </article>
      )}
    </Show>
  );
}
