import { useState } from "react";
import Button from "./components/button";
import FriendsList from "./components/friendsList";
import AddFriend from "./components/friendsList/addFriend";
import SplitBill from "./components/splitBill";
import "./index.css";

function App() {
    const [showAddFriend, setShowAddFriend] = useState(false);

    function handleShowAddFriend() {
        setShowAddFriend(!showAddFriend);
    }

    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList />
                {showAddFriend && <AddFriend />}
                <Button onClick={handleShowAddFriend}>
                    {showAddFriend ? "Close" : "Add Friend"}
                </Button>
            </div>
            <SplitBill />
        </div>
    );
}

export default App;
