import React from "react";
import Friends from "./friends";

function FriendsList({ friends, onSelection, selectedFriend }) {
    return (
        <ul>
            {friends.map((friend) => (
                <Friends
                    selectedFriend={selectedFriend}
                    friend={friend}
                    key={friend.id}
                    onSelection={onSelection}
                />
            ))}
        </ul>
    );
}

export default FriendsList;
