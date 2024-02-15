import React from "react";
import Button from "../../button";

function AddFriend() {
    return (
        <div>
            <form className="form-add-friend">
                <label>Friends name</label>
                <input type="text" />
                <label>🖼️ Image URL</label>
                <input type="text" />
                <Button>Add</Button>
            </form>
        </div>
    );
}

export default AddFriend;
