import React, { useEffect, useState } from "react";
import api from "./services/api";

import User from "./components/User";

interface IUser {
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<Array<IUser>>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = api.get<Array<IUser>>("/users");
    const { data } = await response;
    setUsers(data);
  }

  return (
    <div className="App">
      {users.map(user => (
        <User key={user.email} user={user} />
      ))}
    </div>
  );
}

export default App;
