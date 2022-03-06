
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Favourites from './components/Favourites';

import {BrowserRouter as Router,Routes ,Route , BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
     <Routes>
        <Route exact  path='/'  element={
          <>
            <Banner />
            <Movies />
          </>
        }/>
        <Route path='/favourites' element={<Favourites/>} />
        </Routes>
      
      {/* <Banner/> */}
      {/* <Movies/> name="udai" */}
      {/* <Favourite/> */}
    </Router>
  );
}

export default App;