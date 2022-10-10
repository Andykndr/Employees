import React from 'react';
import EmployersListItem from '../employers-list-item/EmployersListItem';
import './EmployersList.css';

export default function EmployersList({ dataProp, onDelete }) {
  const elements = dataProp.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployersListItem
        key={id}
        {...itemProps}
        onDelete={() => {
          onDelete(id);
        }}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
}
