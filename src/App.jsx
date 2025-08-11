import { useState, useEffect } from "react";
import { initialUser } from "./data";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

function App() {
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("user_data_v2")) || initialUser
  );

  useEffect(() => {
    localStorage.setItem("user_data_vs", JSON.stringify(user));
  }, [user]);

  return (
    <>
      <Header user={user} />
      <Dashboard user={user} setUser={setUser} />
    </>
  );
}

export default App;
