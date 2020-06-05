import useStats from "../utils/useStats";

export default function CountrySelector() {
  const countryData = useStats("https://covid19.mathdro.id/api/countries");
  if (!countryData) return <p>Loading .... </p>;
  console.log("countryData", countryData);

  return (
    <div>
      <h2>Countries</h2>
      <select>
        {countryData.countries.map((country) => (
          <option key={country.iso3} value={country.iso3}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}
