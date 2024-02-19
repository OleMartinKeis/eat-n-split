import React, { useState } from "react";
import Button from "../../button";

function AddFriend({ onAddFriend }) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !image) return;
        const id = crypto.randomUUID();
        const newFriend = {
            name,
            image: `${image}?=${id}`,
            balance: 0,
            id,
        };
        onAddFriend(newFriend);
        setName("");
        setImage("https://i.pravatar.cc/48");
    }

    return (
        <div>
            <form className="form-add-friend" onSubmit={handleSubmit}>
                <label>Friends name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>🖼️ Image URL</label>
                <input
                    type="url"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <Button>Add</Button>
            </form>
        </div>
    );
}

export default AddFriend;
