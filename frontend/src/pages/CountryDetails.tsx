import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_COUNTRY } from "../api/queries";
import "../styles/country-details.scss";

export default function CountryDetails() {
  const { code } = useParams();

  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { code },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.country) return <p>No data</p>;
  const country = data.country;

  return (
    <div className="country-details">
      <h1>{country.emoji}</h1>
      <p>
        <span>Name:</span> {country.name} ({country.code})
      </p>
      {
        <p>
          <span>Continent:</span>
          {country.continent
            ? country.continent.name
            : " No continent available"}
        </p>
      }
    </div>
  );
}
