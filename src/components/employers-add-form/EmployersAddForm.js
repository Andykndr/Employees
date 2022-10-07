import React from 'react';
import './EmployersAddForm.css';

export default function EmployersAddForm() {
  return (
    <div className="app-add-form">
      <h3>Add new employee</h3>
      <form className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="What is his name?"
        />

        <input
          step="50"
          type="number"
          className="form-control new-post-label"
          placeholder="How much $ ?"
        />
        <button className="btn btn-outline-dark" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
