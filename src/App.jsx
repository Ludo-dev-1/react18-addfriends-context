import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import FriendList from "./components/FriendList";
import User from "./components/User";
import AddFriendsContext from "./context/addFriendsContext";

function App() {
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.data)
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className='App'>
      <AddFriendsContext.Provider value={{ friends, setFriends }}> 
      <FriendList/>
      <h2>Users :</h2>
      {users.map((user) => (
        <User
          key={user.id}
          {...user} 
        />
      ))}

      </AddFriendsContext.Provider>
      
    </div>
  );
}

export default App;

