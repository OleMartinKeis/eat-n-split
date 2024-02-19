import React from "react";
import Friends from "./friends";

function FriendsList({ friends, onSelection }) {
    return (
        <ul>
            {friends.map((friend) => (
                <Friends
                    friend={friend}
                    key={friend.id}
                    onSelection={onSelection}
                />
            ))}
        </ul>
    );
}

export default FriendsList;
