import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/login'>Login</Route>
        <Route path='/registration'>Registration</Route>
      </Routes>
    </div>
  );
}

export default App;
