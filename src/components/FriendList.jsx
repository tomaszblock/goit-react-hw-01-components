import React from 'react';
import friends from '../json/friends.json'
import css from "../css/FriendList.module.css";


const FriendListItem = ({ props }) => {
  return (
<React.Fragment>
{props.map(prop => (
<li key={prop.id} className={css.item}>
<span className={`${prop.isOnline ? css.statusOn : css.statusOff} ${css.status}`}></span>
<img className={css.avatar} src={prop.avatar} alt="User avatar" width="48" />
<p className={css.name}>{prop.name}</p>
</li>
 ))}
 </React.Fragment>
  );
};

export const FriendList = () => {
  return (
<ul className={css.friendList}>
 <FriendListItem props={friends} />
</ul>
  );
};




