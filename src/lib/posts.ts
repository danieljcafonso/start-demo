import { action, cache, redirect } from "@solidjs/router";
import { storage } from "./db";

type Post = {
  id: number;
  title: string;
  caption: string;
  content: string;
  timestamp: number;
};

export const getPosts = cache(async () => {
  "use server";
  return ((await storage.getItem("posts:data")) as Post[]).reverse();
}, "posts");

export const getPost = cache(async (id: number) => {
  "use server";
  return ((await storage.getItem("posts:data")) as Post[]).find(
    (post) => post.id === id
  );
}, "post");

type PostInput = Pick<Post, "title" | "caption" | "content">;
export const addPost = action(async (data: FormData) => {
  "use server";

  const postInput = {
    title: String(data.get("title")),
    caption: String(data.get("caption")),
    content: String(data.get("content")),
  };

  let [{ value: posts }, { value: index }] = await storage.getItems([
    "posts:data",
    "posts:counter",
  ]);

  let post;
  await Promise.all([
    storage.setItem("posts:data", [
      ...(posts as Post[]),
      (post = { ...postInput, id: index as number, timestamp: Date.now() }),
    ]),
    storage.setItem("posts:counter", (index as number) + 1),
  ]);
  return redirect("/");
});
