import { createContext, useEffect, useState } from "react";

import { data } from "../db/achievments";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const myStorage = window.localStorage;
  const [achievements, setAchievements] = useState([]);
  const [showRegistry, setShowRegistry] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  // local
  const [localClick, setLocalClick] = useState(myStorage.getItem("localClick"));
  const [localLevel, setLocalLevel] = useState(myStorage.getItem("localLevel"));
  // user
  const [currentUser, setCurrentUser] = useState(myStorage.getItem("user"));
  const [userId, setUserId] = useState();
  const [userClick, setUserClick] = useState(myStorage.getItem("userClick"));
  const [userLevel, setUserLevel] = useState(myStorage.getItem("userLevel"));

  useEffect(() => {
    setAchievements(data);
  }, []);
  return (
    <StoreContext.Provider
      value={{
        myStorage,
        achievements,
        setAchievements,
        showRegistry,
        setShowRegistry,
        showLogin,
        setShowLogin,
        isLogged,
        setIsLogged,
        userId,
        setUserId,
        localClick,
        setLocalClick,
        localLevel,
        setLocalLevel,
        currentUser,
        setCurrentUser,
        userClick,
        setUserClick,
        userLevel,
        setUserLevel,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
