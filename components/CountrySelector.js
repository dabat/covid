import useStats from "../utils/useStats";
import Stats from "./Stats";
import { useState } from "react";
import styled from "styled-components";

const Selector = styled.div`
  background: #e6f7ff;
  padding: 2rem;
  margin: 1rem;
  border-radius: 2rem;
  text-align: center;
`;

export default function CountrySelector() {
  const { stats: countryData, loading, error } = useStats(
    "https://covid19.mathdro.id/api/countries"
  );
  const [selectedCountry, setSelectedCountry] = useState("USA");

  if (!countryData)
    return <p>oh goodness... no countryData to show! sorry. 😔</p>;
  if (loading) return <p>Loading .... </p>;
  if (error) return <p>uh oh, error .... </p>;

  let selectedCountryName = countryData.countries.filter(
    (c) => c.iso3 === selectedCountry
  )[0].name;

  return (
    <div>
      <Selector>
        <h2>
          Currently Showing {`${selectedCountryName} (${selectedCountry})`}
        </h2>
        <select
          onChange={(e) => {
            setSelectedCountry(e.target.value);
          }}
          // value={selectedCountry === country.iso3}
        >
          {countryData.countries.map((country) => (
            <option
              selected={selectedCountry === country.iso3}
              key={country.iso3}
              value={country.iso3}
            >
              {country.name}
            </option>
          ))}
        </select>
      </Selector>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      />
    </div>
  );
}
