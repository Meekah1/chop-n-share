import React from "react";
// import { useState } from "react";
import Button from "./Button";

function SplitBill({ selectedFriend }) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label htmlFor="">💰Bill value</label>
      <input type="text" />
      <label htmlFor="">🧔🏽Your expenses</label>
      <input type="text" />
      <label htmlFor="">🧑🏻‍🤝‍🧑🏻{selectedFriend.name}'s Expenses</label>
      <input type="text" disabled />

      <label htmlFor="">🤑 Who is paying the Bill</label>
      <select name="" id="">
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default SplitBill;
