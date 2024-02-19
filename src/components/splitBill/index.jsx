import React from "react";
import Button from "../button";

function SplitBill({ selectedFriend }) {
    return (
        <div>
            <form className="form-split-bill">
                <h2>Split a bill with {selectedFriend.name}</h2>
                <label>💵 Bill value</label>
                <input type="text" />
                <label>Your expense</label>
                <input type="text" />
                <label>💵 {selectedFriend.name}'s expense</label>
                <input type="text" disabled />
                <label>🏧 Who is paying the bill?</label>
                <select>
                    <option value="user">You</option>
                    <option value="friend">{selectedFriend.name}</option>
                </select>
                <Button>Add</Button>
            </form>
        </div>
    );
}

export default SplitBill;
