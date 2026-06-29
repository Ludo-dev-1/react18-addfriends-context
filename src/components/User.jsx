import PropTypes from "prop-types";
import AddFriendsContext from "../context/addFriendsContext";
import { useContext } from "react";

function User(props) {
  const { username, name, email } = props;

  // With context
  const { friends, setFriends } = useContext(AddFriendsContext);

  function addFriend() {
    if (friends.includes(username)) {
      setFriends(friends.filter((user) => user !== username));
    } else {
      setFriends([username, ...friends]);
    }
  }

  return (
    <div className="User">
      <h3>{username}</h3>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <button onClick={addFriend}>
        {friends.includes(username) ? "Unfollow" : "Follow"}
      </button>
      <hr />
    </div>
  );
}


export default User;
