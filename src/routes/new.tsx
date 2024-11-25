import { addOnCall } from "~/lib/oncall";

export default function NewOnCall() {
  return (
    <>
      <form method="post" action={addOnCall}>
        <input type="text" required name="service" placeholder="Service" />
        <input type="text" required name="user" placeholder="User" />
        <input
          type="datetime-local"
          required
          name="timeStart"
          placeholder="Start Time"
        />
        <input
          type="datetime-local"
          required
          name="timeEnd"
          placeholder="End Time"
        />
        <button type="submit">Add On Call Rotation</button>
      </form>
      <a href="/"> Go back </a>
    </>
  );
}
