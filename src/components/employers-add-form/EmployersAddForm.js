import React, { Component } from 'react';
import './EmployersAddForm.scss';

class EmployersAddForm extends Component {
  state = {
    name: '',
    salary: '',
  };

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
      name: '',
      salary: '',
    });
  };

  render() {
    const { name, salary } = this.state;

    return (
      <div className="app-add-form">
        <h3>Add new employee</h3>
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="What is his name?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            step="50"
            type="number"
            className="form-control new-post-label"
            placeholder="How much $ ?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />
          <button className="btn btn-outline-dark" type="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EmployersAddForm;
