import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Profile } from 'components/Profile'
import { Statistics } from 'components/Statiscits'
import { Elosik } from 'components/FriendList'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Profile/>
  <Statistics/>
  <Elosik/>
  </React.StrictMode>
);
