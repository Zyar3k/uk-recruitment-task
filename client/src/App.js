import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/layout/Header/Header";
import Home from "./components/views/Home/Home";
import Shop from "./components/views/Shop/Shop";
import Achievements from "./components/views/Achievements/Achievements";
import Login from "./components/features/Login/Login";
import Register from "./components/features/Register/Register";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  // open close modal
  const [showRegistry, setShowRegistry] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div>
      <Header
        isLogged={isLogged}
        setShowRegistry={setShowRegistry}
        setShowLogin={setShowLogin}
      />
      <main className='widthContainer'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/achievements' component={Achievements} />
          <Route path='/shop' component={Shop} />
        </Switch>
      </main>
      {showLogin && <Login setShowLogin={setShowLogin} />}
      {showRegistry && <Register setShowRegistry={setShowRegistry} />}
    </div>
  );
}

export default App;
