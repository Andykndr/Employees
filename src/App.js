import { Component } from 'react';
import Counter from './All/Counter';
import './App.css';
import AppFilter from './components/app-filter/AppFilter';
import AppInfo from './components/app-info/AppInfo';
import EmployersAddForm from './components/employers-add-form/EmployersAddForm';
import EmployersList from './components/employers-list/EmployersList';
import SearchPanel from './components/search-panel/SearchPanel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'Andy', salary: 1000, increase: false, id: 1 },
        { name: 'Julia', salary: 2000, increase: false, id: 2 },
        { name: 'Nika', salary: 500, increase: true, id: 3 },
      ],
    };
    this.maxId = 4;
  }
  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: this.maxId++,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };
  render() {
    return (
      <div className="App">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployersList dataProp={this.state.data} onDelete={this.deleteItem} />
        <EmployersAddForm onAdd={this.addItem} />
        <Counter />
      </div>
    );
  }
}

export default App;
