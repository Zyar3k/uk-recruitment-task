import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/layout/Header/Header";
import Home from "./components/views/Home/Home";
import Shop from "./components/views/Shop/Shop";
import Achievements from "./components/views/Achievements/Achievements";
// import Logout from "./components/features/Logout/Logout";
// import Login from "./components/features/Login/Login";
// import Register from "./components/features/Register/Register";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div>
      <Header isLogged={isLogged} />
      <main className='widthContainer'>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/achievements' component={Achievements} />
          <Route path='/shop' component={Shop} />
        </Switch>
      </main>
      {/* <Login />
      <Logout />
      <Register /> */}
    </div>
  );
}

export default App;
