import friends from '../json/friends.json'


const Test = ({ props }) => {
  return (
    <ul class="stat-list">
      {props.map(prop => (
        
        <li class="item">
      <span class="label">{prop.avatar}</span>
      <span class="percentage">{prop.name}</span>
      {prop.isOnline === true ? (
        <p>ZIELONY</p>
      ) : (
        <p>CZERWONY</p>
      )}
        </li>
      ))}
    </ul>
  );
};

export const Elosik = () => {
  return (
    <section class="statistics">
  <h2 class="title">Upload stats</h2>
      <Test props={friends} />
    </section>
  );
};




