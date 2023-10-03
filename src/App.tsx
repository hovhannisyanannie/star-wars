import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Home from "./pages/home/Home";
import PeopleDetails from "./pages/peopleDetails/PeopleDetails";






const App = () => {

  return (
    <div className='App'>
      <Header />
      <Router>
        <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/people/:id' element={<PeopleDetails />}/>
        </Routes>
      </Router> 
    </div>
  )
}

export default App