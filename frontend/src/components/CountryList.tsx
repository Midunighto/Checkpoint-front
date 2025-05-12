import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../api/queries";
import { Link } from "react-router-dom";
import { Country } from "../types";
import "../styles/country-list.scss";

export default function CountryList() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.countries) return <p>No data</p>;
  const countries = data.countries;

  return (
    <div className="countries-container">
      {countries.map((country: Country) => (
        <Link
          key={country.code}
          to={`/country/${country.code}`}
          className="country"
        >
          <span>{country.name}</span>
          <span>{country.emoji}</span>
        </Link>
      ))}
    </div>
  );
}
