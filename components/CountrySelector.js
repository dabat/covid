import useStats from "../utils/useStats";

export default function CountrySelector() {
  const countryData = useStats("https://covid19.mathdro.id/api/countries");
  if (!countryData) return <p>Loading .... </p>;
  console.log("countryData", countryData);

  let oldCountry = {
    countries: {},
    iso3: {},
  };

  for (let country of countryData.countries) {
    oldCountry.countries[country.name] = country.iso2;
    oldCountry.iso3[country.iso2] = country.iso3;
  }

  console.log("oldCountry", oldCountry);

  return (
    <div>
      <h2>Countries</h2>
      <select>
        {Object.entries(oldCountry.countries).map(([country, code]) => (
          <option key={code} value={oldCountry.iso3[code]}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}
