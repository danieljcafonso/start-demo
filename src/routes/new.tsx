import { addPost } from "~/lib/posts";

export default function NewPost() {
  return (
    <form action={addPost} method="post">
      <input type="text" required name="title" placeholder="Title" />
      <input type="text" required name="caption" placeholder="Caption" />
      <textarea
        required
        minLength={30}
        name="content"
        placeholder="Post here..."
        rows="8"
        cols="40"
      />
      <button type="submit">Create Post</button>
    </form>
  );
}
