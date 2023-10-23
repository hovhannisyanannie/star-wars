import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import PeopleDetails from "./pages/peopleDetails/PeopleDetails";
import Header from "./components/header/Header";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";


const App = () => {

  return (
    <div className='App'>
      <Router>
       <Header />
        <Routes>
            <Route path='/' element={ <Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/people/:id' element={<PeopleDetails />}/>
        </Routes>
        <Footer />
      </Router> 
     
    </div>
  )
}

export default App