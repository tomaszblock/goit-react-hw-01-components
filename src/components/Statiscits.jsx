import stats from '../json/data.json'
import css from "../css/Statistics.module.css";
import randomColor from 'randomcolor';


const StatsProps = ({ props }) => {
  const backgroundColors = props.map(() => randomColor()); 

  return (
    <ul className={css.statsList}>
      {props.map((prop, index) => (
        <li className={css.item} style={{ backgroundColor: backgroundColors[index] }} key={index}>
      <span className={css.label}>{prop.label}</span>
      <span className={css.percentage}>{prop.percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

export const Statistics = () => {
  return (
    <section className={css.statistics}>
  <h2 className={css.title}>Upload stats</h2>
      <StatsProps props={stats} />
    </section>
  );
};




