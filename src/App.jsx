import { useState } from "react";
import Button from "./components/button";
import FriendsList from "./components/friendsList";
import AddFriend from "./components/friendsList/addFriend";
import SplitBill from "./components/splitBill";
import "./index.css";

const initialFriends = [
    {
        id: 118836,
        name: "Clark",
        image: "https://i.pravatar.cc/48?u=118836",
        balance: -7,
    },
    {
        id: 933372,
        name: "Sarah",
        image: "https://i.pravatar.cc/48?u=933372",
        balance: 20,
    },
    {
        id: 499476,
        name: "Anthony",
        image: "https://i.pravatar.cc/48?u=499476",
        balance: 0,
    },
];

function App() {
    const [showAddFriend, setShowAddFriend] = useState(false);
    let [friends, setFriends] = useState(initialFriends);
    const [selectedFriend, setSelectedFriend] = useState(null);

    function handleShowAddFriend() {
        setShowAddFriend(!showAddFriend);
    }

    function handleAddFriend(friend) {
        setFriends((friends = [...friends, friend]));
        setShowAddFriend(false);
    }

    function handleSelecetion(friend) {
        setSelectedFriend((selected) =>
            selected?.id === friend.id ? null : friend
        );
        setShowAddFriend(false);
    }

    function handleSplitBill(value) {
        setFriends((friends) =>
            friends.map((friend) =>
                friend.id === selectedFriend.id
                    ? { ...friend, balance: friend.balance + value }
                    : friend
            )
        );

        setSelectedFriend(null);
    }

    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList
                    friends={friends}
                    onSelection={handleSelecetion}
                    selectedFriend={selectedFriend}
                />
                {showAddFriend && <AddFriend onAddFriend={handleAddFriend} />}
                <Button onClick={handleShowAddFriend}>
                    {showAddFriend ? "Close" : "Add Friend"}
                </Button>
            </div>
            {selectedFriend && (
                <SplitBill
                    selectedFriend={selectedFriend}
                    onSplitBill={handleSplitBill}
                    key={selectedFriend.id}
                />
            )}
        </div>
    );
}

export default App;
