import CountryList from "../components/CountryList";
import CreateCountry from "../components/CreateCountry";

export function HomePage() {
  return (
    <>
      <CreateCountry />
      <CountryList />
    </>
  );
}
