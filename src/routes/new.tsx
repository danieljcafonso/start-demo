import { addCar } from "~/lib/cars";

export default function NewCar() {
  return (
    <>
      <form method="post" action={addCar}>
        <input type="text" required name="brand" placeholder="Brand" />
        <input type="text" required name="model" placeholder="Model" />
        <input
          type="number"
          required
          min={1}
          name="price"
          placeholder="Price"
        />
        <textarea
          required
          minLength={30}
          name="description"
          placeholder="Add your car information here..."
          rows="8"
          cols="40"
        />
        <button type="submit">Create Car</button>
      </form>
      <a href="/"> Go back </a>
    </>
  );
}
