import { useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/layout/Header/Header";
import Home from "./components/views/Home/Home";
import Shop from "./components/views/Shop/Shop";
import Achievements from "./components/views/Achievements/Achievements";
import Login from "./components/features/Login/Login";
import Register from "./components/features/Register/Register";

import { StoreContext } from "./store/StoreProvider";

function App() {
  const {
    showRegistry,
    myStorage,
    showLogin,
    isLogged,
    setIsLogged,
    localClick,
    localLevel,
    setLocalClick,
    setLocalLevel,
    currentUser,
    userClick,
    userLevel,
    setUserLevel,
  } = useContext(StoreContext);
  // set start localstorage
  useEffect(() => {
    let countLocal = JSON.parse(localClick);
    let levelLocal = JSON.parse(localLevel);

    if (currentUser) setIsLogged(true);
    if (countLocal === null) setLocalClick(0);
    if (levelLocal === null) setLocalLevel(1);
    myStorage.setItem("localClick", localClick);
    myStorage.setItem("localLevel", localLevel);
    if (userClick !== undefined) {
      myStorage.setItem("userClick", userClick);
      myStorage.setItem("userLevel", userLevel);
    }
  }, [
    localClick,
    myStorage,
    localLevel,
    userClick,
    currentUser,
    userLevel,
    setIsLogged,
    setLocalClick,
    setLocalLevel,
  ]);

  // set level
  useEffect(() => {
    const step = 10;
    if (isLogged) {
      if (userClick === step) {
        setUserLevel(2);
      } else if (userClick === step * 2) {
        setUserLevel(3);
      } else if (userClick === step * 4) {
        setUserLevel(4);
      } else if (userClick === step * 8) {
        setUserLevel(5);
      } else if (userClick === step * 16) {
        setUserLevel(6);
      }
    } else {
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
    }
  }, [
    localClick,
    localLevel,
    setLocalLevel,
    userClick,
    setUserLevel,
    isLogged,
  ]);

  return (
    <>
      <div>
        <Header />
        <main className='widthContainer'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/achievements'>
              <Achievements />
            </Route>
            <Route path='/shop' component={Shop} />
          </Switch>
        </main>
      </div>
      <div className={showRegistry || showLogin ? "modal" : null}>
        {showLogin && <Login />}
        {showRegistry && <Register />}
      </div>
    </>
  );
}

export default App;
