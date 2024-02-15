import React, { useState } from "react";
import Button from "../../button";

function AddFriend() {
    const [name, setName] = useState("");
    const [img, setImg] = useState("https://i.pravatar.cc/48");

    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !img) return;
        const id = crypto.randomUUID();
        const newFriend = {
            name,
            img: `${img}?=${id}`,
            balance: 0,
            id,
        };
        console.log(newFriend);
        setName("");
        setImg("https://i.pravatar.cc/48");
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
                    type="text"
                    value={img}
                    onChange={(e) => setImg(e.target.value)}
                />
                <Button>Add</Button>
            </form>
        </div>
    );
}

export default AddFriend;
