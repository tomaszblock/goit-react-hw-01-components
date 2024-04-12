import stats from '../json/data.json'


const StatsProps = ({ props }) => {
  return (
    <ul className="stat-list">
      {props.map(prop => (
        <li className="item">
      <span className="label">{prop.label}</span>
      <span className="percentage">{prop.percentage}</span>
        </li>
      ))}
    </ul>
  );
};

export const Statistics = () => {
  return (
    <section className="statistics">
  <h2 className="title">Upload stats</h2>
      <StatsProps props={stats} />
    </section>
  );
};




