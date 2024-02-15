import Button from "./components/button";
import FriendsList from "./components/friendsList";
import AddFriend from "./components/friendsList/addFriend";
import SplitBill from "./components/splitBill";
import "./index.css";

function App() {
    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList />
                <AddFriend />
                <Button>Add Friend</Button>
            </div>
            <SplitBill />
        </div>
    );
}

export default App;
