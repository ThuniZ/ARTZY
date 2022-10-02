import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Artist from './Components/Artist';
import Cart from "./pages/Cart";
import Login from './pages/Login';
import Wishlist from './pages/Wishlist';
import Category from './pages/Category';
import Signup from './pages/Signup';
import BrowsingBy from './pages/BrowsingBy'
import Pagenotfound from './Components/Pagenotfound';
import Artistprofile from './pages/Artistprofile';
import Artistprofile2 from './pages/Artistprofile2';
import UnderConstruction from './pages/UnderConstruction'
import ArtistproductPage from './pages/ArtistproductPage';
import Searchresult from './pages/Searchresult';
import ArtistsingleItem from './Components/ArtistsingleItem';
import Productpage from './pages/Productpage';
import Admin from './pages/Admin';
import {React, useEffect} from 'react';
function App() {
  useEffect(() => {
    if(localStorage.getItem('cart') == null) {
      localStorage.setItem('cart', JSON.stringify([]))
    }
  },[])
 
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/product/:id" element={<Productpage />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/artist/:id" element={<ArtistproductPage />} />
          <Route path="/profile" element={<Artistprofile />} />
          <Route path="/artist3" element={<Artistprofile2 />} />
          <Route path="/artist4" element={<ArtistsingleItem />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/category" element={<Category />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/category/:id" element={<BrowsingBy />} />
          <Route path="/underconstruction" element={<UnderConstruction />} />
          <Route path="/query/:id" element={<Searchresult />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
