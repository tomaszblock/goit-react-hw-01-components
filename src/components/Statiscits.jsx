import stats from '../json/data.json'


const StatsProps = ({ props }) => {
  return (
    <ul class="stat-list">
      {props.map(prop => (
        <li class="item">
      <span class="label">{prop.label}</span>
      <span class="percentage">{prop.percentage}</span>
        </li>
      ))}
    </ul>
  );
};

export const Statistics = () => {
  return (
    <section class="statistics">
  <h2 class="title">Upload stats</h2>
      <StatsProps props={stats} />
    </section>
  );
};




