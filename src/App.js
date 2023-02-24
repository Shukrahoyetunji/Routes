import FacebookDetail from './component/facebookDetails';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './component/landing';
import NavBar from './component/nav-bar';
import Layout from './component/Layoutt';
import PeopleInfo from './component/people';
import Person from './component/people/person';
import FacebookPerson from './component/facebookDetails/person';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Landing />}></Route>
          <Route path='/database/' exact element={<Layout />}>
            <Route path='people'exact element={<PeopleInfo/>}></Route>
            <Route path='people/:personId'exact element={<Person/>}></Route>
            <Route path='facebookdetails' exact element={<FacebookDetail />}></Route>
            <Route path='facebookdetails/:personId' exact element={<FacebookPerson />}></Route>
           
          </Route>


        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
