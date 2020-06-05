import useStats from "../utils/useStats";

export default function Stats({ url }) {
  const stats = useStats(url);
  if (!stats) return <p>Loading .... </p>;
  console.log(stats);
  return (
    <div>
      <div className="statBlock">
        <h1>Confirmed:</h1>
        <span>{stats.confirmed.value}</span>
      </div>
      <div className="statBlock">
        <h1>Recovered:</h1>
        <span>{stats.recovered.value}</span>
      </div>
      <div className="statBlock">
        <h1>Deaths:</h1>
        <span>{stats.deaths.value}</span>
      </div>
    </div>
  );
}
