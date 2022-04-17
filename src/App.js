import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Authentication/Login/Login';
import PrivateAuth from './components/Authentication/PrivateAuth/PrivateAuth';
import Registration from './components/Authentication/Registration/Registration';
import Checkout from './components/Checkout/Checkout';
import CourseDetail from './components/CourseDetail/CourseDetail';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/course/:courseId' element={<CourseDetail />}></Route>
        <Route path='/checkout' element={
            <PrivateAuth>
              <Checkout />
            </PrivateAuth>
        }></Route>
        <Route path='/login' element={<Login />}>Login</Route>
        <Route path='/registration' element={<Registration />}>Registration</Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
