import friends from '../json/friends.json'


const FriendListItem = ({ props }) => {
  return (
    <div>
{props.map(prop => (
<li className="item">
<span className={prop.isOnline === true ? ("status-on") : ("status-off")}>kolorek</span>
<img className="avatar" src={prop.avatar} alt="User avatar" width="48" />
<p className="name">{prop.name}</p>
</li>
 ))}
 </div>
  );
};

export const FriendList = () => {
  return (
<ul className="friend-list">
 <FriendListItem props={friends} />
</ul>
  );
};




