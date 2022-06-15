import useStats from '../utils/useStats';
import styled from 'styled-components';

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const StatBlock = styled.div`
  background: #bacdde;
  font-family: Roboto, 'Andale Mono', sans-serif;
  font-size: 2rem;
  padding: 2rem;
  margin: 1rem;
  border-radius: 2rem;
  text-align: center;
  display: grid;
  align-items: center;
  justify-items: center;
`;

const Formatter = (number) => {
  return number ? new Intl.NumberFormat().format(number) : 0;
};

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);

  if (!stats) return <p>Loading .... </p>;

  return (
    <StatGrid>
      <StatBlock>
        <h1>Confirmed</h1>
        <span>{Formatter(stats.confirmed.value)}</span>
      </StatBlock>
      <StatBlock>
        <h1>Recovered</h1>
        <span>{Formatter(stats.recovered.value)}</span>
      </StatBlock>
      <StatBlock>
        <h1>Deaths</h1>
        <span>{Formatter(stats.deaths.value)}</span>
      </StatBlock>
    </StatGrid>
  );
}
