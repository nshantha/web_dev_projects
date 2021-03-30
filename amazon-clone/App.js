import {useState, useEffect} from 'react'
import './App.css';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { db, auth } from './firebase'
import Login from './login';

function App() {

  //creating state for user(using the state of the user from local storage)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  // creating state for cart items
  const [cartItems, setCartItems] = useState([]);

    const getCartItems = () => {
        db.collection('cartitems').onSnapshot((snapshot) => {
            let tempItems = [];
            
            tempItems = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    product: doc.data()

                }

            ));
            setCartItems(tempItems);
        })
    }

    useEffect(() => {
      getCartItems();
    }, [])

    //sign-out function
    const signOut = () => {
      auth.signOut().then(()=>{
        localStorage.removeItem('user')
        setUser(null)
      })
    }

  return (
    <Router>
      {
        !user ? (
          <Login setUser = {setUser}/>
        ) : (

          <div className="App">
          <Header 
              user = {user} 
              cartItems = {cartItems}
              signOut = {signOut}
          />

          <Switch>


            <Route path="/cart">
              <Cart cartItems = {cartItems}/>
            </Route>
            
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
          
          
        </div>
        )
      }
      

    </Router>
  );
}

export default App;
