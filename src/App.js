import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Authentication/Login/Login';
import Registration from './components/Authentication/Registration/Registration';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/login' element={<Login />}>Login</Route>
        <Route path='/registration' element={<Registration />}>Registration</Route>
      </Routes>
    </div>
  );
}

export default App;
