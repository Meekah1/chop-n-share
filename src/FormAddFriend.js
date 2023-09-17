import React from "react";
import Button from "./Button";
import { useState } from "react";

function FormAddFriend({ onAddFriend }) {
  // console.log(friend);
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=499476");

  function handleAddFriend(e) {
    e.preventDefault();

    const id = crypto.randomUUID();

    const newFriend = {
      image: `${image}?=${id}`,
      name,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48?u=499476");
  }

  return (
    <>
      <form className="form-add-friend" onSubmit={handleAddFriend}>
        <label htmlFor="">🧑🏻‍🤝‍🧑🏻Friend Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />

        <label htmlFor="">Image Url</label>
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
        />

        <Button>Add</Button>
      </form>
    </>
  );
}

export default FormAddFriend;
