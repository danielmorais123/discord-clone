import React, { useEffect } from "react";

import "./styles/App.css";
import LeftDiscord from "./components/LeftDiscord";
import RightDiscord from "./components/RightDiscord";
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
import Login from "./components/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { login, logout } from "./features/counter/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            photo: user.photoURL,
            email: user.email,
            displayName: user.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      {user ? (
        <>
          <LeftDiscord />
          <RightDiscord />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
