import { storage } from "./db";

type Post = {
  id: number;
  title: string;
  caption: string;
  content: string;
  timestamp: number;
};

export const getPosts = async () => {
  return ((await storage.getItem("posts:data")) as Post[]).reverse();
};

export const getPost = async (id: number) => {
  return ((await storage.getItem("posts:data")) as Post[]).find(
    (post) => post.id === id
  );
};

type PostInput = Pick<Post, "title" | "caption" | "content">;
export const addPost = async (postInput: PostInput) => {
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
  return post;
};
