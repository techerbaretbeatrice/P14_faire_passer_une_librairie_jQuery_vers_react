
import './App.css';
import { DataProvider } from './Context';
import Router from './Router';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router />
      </div>

    </DataProvider>
  );
}

export default App;
