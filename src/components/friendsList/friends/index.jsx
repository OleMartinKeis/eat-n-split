import React from "react";
import Button from "../../button";

function Friends({ friend, onSelection }) {
    return (
        <li>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && (
                <p className="red">
                    You owe {friend.name} {Math.abs(friend.balance)}$
                </p>
            )}
            {friend.balance > 0 && (
                <p className="green">
                    Your friend {friend.name} owes u {Math.abs(friend.balance)}$
                </p>
            )}
            {friend.balance === 0 && <p>You and {friend.name} are even</p>}
            <Button onClick={() => onSelection(friend)}>Select</Button>
        </li>
    );
}

export default Friends;
