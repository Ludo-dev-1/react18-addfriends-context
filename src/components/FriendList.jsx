import PropTypes from "prop-types";
import AddFriendsContext from "../context/addFriendsContext";
import { useContext } from "react";

function FriendList() {
  // TODO replace with context
  const { friends } = useContext(AddFriendsContext);

  return (
    <div className="FriendList">
      <h2>{friends.length < 2 ? "Your friend" : "Your friends"}</h2>
      {friends.length
        ? friends.map((username) => <p key={username}>{username}</p>)
        : "Add your first friend below"}
      <hr />
    </div>
  );
}

export default FriendList;
