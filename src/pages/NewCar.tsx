import { useNavigate } from "@solidjs/router";
import { addCar } from "~/lib/cars";

export default function NewCar() {
  const navigate = useNavigate();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const form: any = e.target;
          addCar({
            brand: form.brand.value,
            model: form.model.value,
            description: form.description.value,
            price: form.price.value,
          }).then(() => navigate("/"));
        }}
      >
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
