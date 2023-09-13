import React from "react";
import Button from "./Button";

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label htmlFor="">🧑🏻‍🤝‍🧑🏻Friend Name</label>
      <input type="text" />
      <label htmlFor="">Image Url</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
