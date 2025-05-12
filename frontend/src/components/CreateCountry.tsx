import { useMutation, useQuery } from "@apollo/client";
import { CREATE_COUNTRY } from "../api/mutations";
import { GET_CONTINENTS, GET_COUNTRIES } from "../api/queries";
import { Continent } from "../types";
import "../styles/create-country.scss";

export default function CreateCountry() {
  const [createCountry] = useMutation(CREATE_COUNTRY, {
    refetchQueries: [{ query: GET_COUNTRIES }],
  });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      code: formData.get("code"),
      emoji: formData.get("emoji"),
      continent: { id: parseInt(formData.get("continent") as string) },
    };
    createCountry({
      variables: { data },
    }).then(() => {
      e.target.reset();
    });
  };

  const { loading, error, data } = useQuery(GET_CONTINENTS);
  if (error) return <p>Error: {error.message}</p>;
  if (loading) return <p>Loading...</p>;
  if (!data || !data.continents) return <p>No data</p>;
  const continents = data.continents;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="emoji">Emoji</label>
        <input type="text" id="emoji" name="emoji" required />
      </div>
      <div className="form-group">
        <label htmlFor="code">Code</label>
        <input type="text" id="code" name="code" required />
      </div>
      <div className="form-group">
        <label htmlFor="continent">Continent</label>
        <select id="continent" name="continent" required>
          {continents.map((continent: Continent) => (
            <option key={continent.id} value={continent.id}>
              {continent.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit">Add</button>
    </form>
  );
}
