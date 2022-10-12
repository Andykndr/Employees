import { Component } from 'react';
import Alert from './Alert/Alert';
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
        { name: 'Andy', salary: 1000, increase: false, id: 1, rise: true },
        { name: 'Julia', salary: 2000, increase: false, id: 2, rise: false },
        { name: 'Nika', salary: 500, increase: true, id: 3, rise: false },
      ],
      term: '',
      filter: 'all',
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
      if (newItem.name.length > 0 && newItem.salary.length > 0) {
        const newArr = [...data, newItem];
        return {
          data: newArr,
        };
      } else {
        window.alert('Hello world!');
      }
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  SearchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };
  filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter((item) => item.rise);
      case 'moreThen1000':
        return items.filter((item) => item.salary > 1000);
      case 'nice':
        return items.filter((item) => item.increase);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { data, term, filter } = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter((item) => item.increase).length;
    const visibleData = this.filterPost(this.SearchEmp(data, term), filter);

    return (
      <div className="App">
        <AppInfo employees={employees} increased={increased} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <EmployersList
          dataProp={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployersAddForm onAdd={this.addItem} />
        <Counter />
      </div>
    );
  }
}

export default App;
