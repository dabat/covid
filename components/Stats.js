import useStats from "../utils/useStats";
import styled from "styled-components";

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const StatBlock = styled.div`
  background: #f2f2f2;
  font-size: 2rem;
  padding: 2rem;
  margin: 1rem;
  border-radius: 2rem;
  text-align: center;
  display: grid;
  align-items: center;
  justify-items: center;
`;

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);

  if (!stats) return <p>Loading .... </p>;

  return (
    <StatGrid>
      <StatBlock>
        <h1>Confirmed:</h1>
        <span>{stats.confirmed?.value || 0}</span>
      </StatBlock>
      <StatBlock>
        <h1>Recovered:</h1>
        <span>{stats.recovered?.value || 0}</span>
      </StatBlock>
      <StatBlock>
        <h1>Deaths:</h1>
        <span>{stats.deaths?.value || 0}</span>
      </StatBlock>
    </StatGrid>
  );
}
