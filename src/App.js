
import './App.css';
import { DataProvider } from './components/context/DataProvider';
import Header from './components/Header';
import Home from './pages/home/Home';

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Header />
      <Home />
    </div>
    </DataProvider>
  );
}

export default App;
