// src/App.js

import React, { useState, useEffect } from "react";
import UserCard from "./components/UserCards"

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => setUserData(data.results[0]))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">Random User</h1>
      {userData && <UserCard user={userData} />}
    </div>
  );
}

export default App;
