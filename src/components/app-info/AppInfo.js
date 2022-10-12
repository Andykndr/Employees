import React from 'react';
import './AppInfo.css';

export default function AppInfo({ employees, increased }) {
  return (
    <div className="app-info">
      <h1>List of employees of "GLOBAL" company</h1>
      <h2>How much employees :{employees}</h2>
      <h2>Who will have money:{increased}</h2>
    </div>
  );
}
