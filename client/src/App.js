import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/layout/Header/Header";
import Home from "./components/views/Home/Home";
import Shop from "./components/views/Shop/Shop";
import Achievements from "./components/views/Achievements/Achievements";
import Login from "./components/features/Login/Login";
import Register from "./components/features/Register/Register";

function App() {
  const myStorage = window.localStorage;
  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState(myStorage.getItem("user"));
  // open close modal
  const [showRegistry, setShowRegistry] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  // localcount
  const [localClick, setLocalClick] = useState(myStorage.getItem("localClick"));
  const [localLevel, setLocalLevel] = useState(myStorage.getItem("localLevel"));

  useEffect(() => {
    // set basic localstorage
    let countLocal = JSON.parse(localClick);
    let levelLocal = JSON.parse(localLevel);
    if (countLocal === null) setLocalClick(0);
    if (levelLocal === null) setLocalLevel(1);
    myStorage.setItem("localClick", localClick);
    myStorage.setItem("localLevel", localLevel);
  }, [localClick, myStorage, localLevel]);

  return (
    <>
      <div className='widthContainer'>
        <Header
          isLogged={isLogged}
          setShowRegistry={setShowRegistry}
          setShowLogin={setShowLogin}
          setIsLogged={setIsLogged}
          setCurrentUser={setCurrentUser}
          myStorage={myStorage}
        />
        {currentUser}
        <main>
          <Switch>
            <Route exact path='/'>
              <Home
                localClick={localClick}
                setLocalClick={setLocalClick}
                localLevel={localLevel}
                setLocalLevel={setLocalLevel}
                myStorage={myStorage}
                isLogged={isLogged}
              />
            </Route>
            <Route path='/achievements' component={Achievements} />
            <Route path='/shop' component={Shop} />
          </Switch>
        </main>
      </div>
      <div className={showRegistry || showLogin ? "modal" : null}>
        {showLogin && (
          <Login
            setShowLogin={setShowLogin}
            setCurrentUser={setCurrentUser}
            myStorage={myStorage}
            setIsLogged={setIsLogged}
          />
        )}
        {showRegistry && <Register setShowRegistry={setShowRegistry} />}
      </div>
    </>
  );
}

export default App;
