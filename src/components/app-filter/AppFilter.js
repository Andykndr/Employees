import React from 'react';
import './AppFilter.css';

export default function AppFilter() {
  return (
    <div className="btn-group">
      <button className="btn btn-dark" type="button">
        All employees
      </button>
      <button className="btn btn-outline-dark" type="button">
        High salary
      </button>
      <button className="btn btn-outline-dark" type="button">
        More than 1000$
      </button>
    </div>
  );
}
