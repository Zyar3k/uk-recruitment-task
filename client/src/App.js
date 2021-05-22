import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { data } from "./db/achievments";

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
  const [achievements, setAchievements] = useState([]);
  // open close modal
  const [showRegistry, setShowRegistry] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  // localcount
  const [localClick, setLocalClick] = useState(myStorage.getItem("localClick"));
  const [localLevel, setLocalLevel] = useState(myStorage.getItem("localLevel"));

  // set start localstorage
  useEffect(() => {
    let countLocal = JSON.parse(localClick);
    let levelLocal = JSON.parse(localLevel);
    if (countLocal === null) setLocalClick(0);
    if (levelLocal === null) setLocalLevel(1);
    myStorage.setItem("localClick", localClick);
    myStorage.setItem("localLevel", localLevel);
    setAchievements(data);
  }, [localClick, myStorage, localLevel]);

  // set level
  useEffect(() => {
    const step = 10;
    if (localClick === step) {
      setLocalLevel(2);
    } else if (localClick === step * 2) {
      setLocalLevel(3);
    } else if (localClick === step * 4) {
      setLocalLevel(4);
    } else if (localClick === step * 8) {
      setLocalLevel(5);
    } else if (localClick === step * 16) {
      setLocalLevel(6);
    }
  }, [localClick, localLevel, setLocalLevel]);

  return (
    <>
      <div>
        <Header
          isLogged={isLogged}
          setShowRegistry={setShowRegistry}
          setShowLogin={setShowLogin}
          setIsLogged={setIsLogged}
          setCurrentUser={setCurrentUser}
          myStorage={myStorage}
        />
        {currentUser}
        <main className='widthContainer'>
          <Switch>
            <Route exact path='/'>
              <Home
                localClick={localClick}
                setLocalClick={setLocalClick}
                localLevel={localLevel}
                setLocalLevel={setLocalLevel}
                myStorage={myStorage}
                isLogged={isLogged}
                achievements={achievements}
              />
            </Route>
            <Route path='/achievements'>
              <Achievements
                localClick={localClick}
                achievements={achievements}
              />
            </Route>
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
