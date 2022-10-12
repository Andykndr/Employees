import React from 'react';
import './AppFilter.css';

export default function AppFilter(props) {
  const buttonsData = [
    { name: 'all', label: 'All employees', colored: false },
    { name: 'rise', label: 'High salary', colored: false },
    { name: 'moreThen1000', label: 'More than 1000$', colored: false },
    { name: 'nice', label: ' Nice ', colored: true },
  ];

  const buttons = buttonsData.map(({ name, label, colored }) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-dark' : 'btn-outline-dark';
    const style = colored ? { color: 'red' } : null;
    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}
        style={style}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
}
