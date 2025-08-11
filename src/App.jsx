// Manages user states and renders main sections Header and Dashboard

import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

// Initial state for new user used if no user data found in local storage
const initialUser = {
  username: "DevInTraining",
  level: 1,
  currentXp: 0,
  xpToNextLevel: 250,
};

function App() {
  // Initializes user state first checks local storage for data
  // If no data found uses 'initialUser' as starting state
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("user_data_v2")) || initialUser
  );

  // Runs when user state changes + saves current user data to local storage
  useEffect(() => {
    localStorage.setItem("user_data_v2", JSON.stringify(user));
  }, [user]);

  return (
    <>
      {/* Renders Header passing user state as prop */}
      <Header user={user} />
      {/* Renders Dashboard passing user state and function to update */}
      <Dashboard user={user} setUser={setUser} />
    </>
  );
}

export default App;
