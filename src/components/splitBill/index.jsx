import React from "react";
import Button from "../button";

function SplitBill() {
    return (
        <div>
            <form className="form-split-bill">
                <label>💵 Bill value</label>
                <input type="text" />
                <label>Your expense</label>
                <input type="text" />
                <label>💵 X's expense</label>
                <input type="text" disabled />
                <label>🏧 Who is paying the bill?</label>
                <select>
                    <option value="user">You</option>
                    <option value="friend">X's</option>
                </select>
                <Button>Add</Button>
            </form>
        </div>
    );
}

export default SplitBill;
