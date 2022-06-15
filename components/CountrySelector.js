import useStats from '../utils/useStats';
import Stats from './Stats';
import { useState } from 'react';
import styled from 'styled-components';

const Selector = styled.select`
  font-family: 'Office Code Pro', Monaco, 'JetBrains Mono', 'Fira Code',
    Consolas, monospace;
  font-size: 1rem;
`;

const SelectorBlock = styled.div`
  background: #dee4e9;
  padding: 2rem;
  margin: 1rem;
  border-radius: 2rem;
  text-align: center;
`;

export default function CountrySelector() {
  const {
    stats: countryData,
    loading,
    error,
  } = useStats('https://covid19.mathdro.id/api/countries');
  const [selectedCountry, setSelectedCountry] = useState('USA');

  if (!countryData)
    return <p>oh dear ... Sorry, no Country Data to show! 😔</p>;
  if (loading) return <p>Loading .... </p>;
  if (error) return <p>oh dear we have an error</p>;

  let selectedCountryName = countryData.countries.filter(
    (c) => c.iso3 === selectedCountry,
  )[0].name;

  // if the country has no iso3 code then generate one
  countryData.countries.forEach((country, index) => {
    if (!country.iso3) {
      country.iso3 = index.toString().padStart(3, '0');
    }
  });

  return (
    <div>
      <SelectorBlock>
        <h2>
          Currently Showing {`${selectedCountryName} (${selectedCountry})`}
        </h2>
        <Selector
          onChange={(e) => {
            setSelectedCountry(e.target.value);
          }}
          defaultValue={selectedCountry}>
          {countryData.countries.map((country) => (
            <option key={country.iso3} value={country.iso3}>
              {country.name}
            </option>
          ))}
        </Selector>
        <Stats
          url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
        />
      </SelectorBlock>
    </div>
  );
}
