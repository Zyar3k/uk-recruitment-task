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
  // user
  const [userId, setUserId] = useState();
  const [userClick, setUserClick] = useState(myStorage.getItem("userClick"));
  const [userLevel, setUserLevel] = useState(myStorage.getItem("userLevel"));
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
    setAchievements(data);
  }, [localClick, myStorage, localLevel, userClick, currentUser, userLevel]);

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
        <Header
          isLogged={isLogged}
          myStorage={myStorage}
          setIsLogged={setIsLogged}
          setShowRegistry={setShowRegistry}
          setShowLogin={setShowLogin}
          userId={userId}
          setCurrentUser={setCurrentUser}
          userClick={userClick}
          setUserClick={setUserClick}
          userLevel={userLevel}
          setUserLevel={setUserLevel}
        />
        <main className='widthContainer'>
          <Switch>
            <Route exact path='/'>
              <Home
                isLogged={isLogged}
                currentUser={currentUser}
                myStorage={myStorage}
                achievements={achievements}
                localClick={localClick}
                setLocalClick={setLocalClick}
                localLevel={localLevel}
                userClick={userClick}
                setUserClick={setUserClick}
                userLevel={userLevel}
              />
            </Route>
            <Route path='/achievements'>
              <Achievements
                isLogged={isLogged}
                localClick={localClick}
                userClick={userClick}
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
            setIsLogged={setIsLogged}
            myStorage={myStorage}
            currentUser={currentUser}
            setShowLogin={setShowLogin}
            setCurrentUser={setCurrentUser}
            userClick={userClick}
            setUserClick={setUserClick}
            userLevel={userLevel}
            setUserLevel={setUserLevel}
            setUserId={setUserId}
          />
        )}
        {showRegistry && <Register setShowRegistry={setShowRegistry} />}
      </div>
    </>
  );
}

export default App;
