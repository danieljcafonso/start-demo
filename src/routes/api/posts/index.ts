import { APIEvent } from "@solidjs/start/server";
import { addPost, getPosts } from "~/lib/posts";

export const GET = (event: APIEvent) => {
  return getPosts();
};

export const POST = async (event: APIEvent) => {
  const post = await addPost(await event.request.json());
  return new Response(JSON.stringify(post), { status: 201 });
};
