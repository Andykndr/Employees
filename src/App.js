import Counter from './All/Counter';
import './App.css';
import AppFilter from './components/app-filter/AppFilter';
import AppInfo from './components/app-info/AppInfo';
import EmployersAddForm from './components/employers-add-form/EmployersAddForm';
import EmployersList from './components/employers-list/EmployersList';
import SearchPanel from './components/search-panel/SearchPanel';

function App() {
  const data = [
    { name: 'Andy', salary: 1000, increase: false, id: 1 },
    { name: 'Julia', salary: 2000, increase: false, id: 2 },
    { name: 'Nika', salary: 500, increase: true, id: 3 },
  ];

  return (
    <div className="App">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployersList dataProp={data} />
      <EmployersAddForm />
      <Counter />
    </div>
  );
}

export default App;
