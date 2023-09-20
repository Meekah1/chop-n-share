import React, { useState } from "react";
// import { useState } from "react";
import Button from "./Button";

function SplitBill({ selectedFriend }) {
  const [bill, setBil] = useState("");
  const [payByUser, setPayByUser] = useState("");
  const paidByFriend = bill ? bill - payByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  // function handleBill(e) {
  //   e.preventDefault();
  // }

  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰Bill value</label>
      <input
        value={bill}
        onChange={(e) => setBil(Number(e.target.value))}
        type="text"
      />
      <label>🧔🏽Your expenses</label>
      <input
        value={payByUser}
        onChange={(e) => setPayByUser(Number(e.target.value))}
        type="text"
      />
      <label>🧑🏻‍🤝‍🧑🏻{selectedFriend.name}'s Expenses</label>
      <input type="text" disabled value={paidByFriend} />

      <label>🤑 Who is paying the Bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default SplitBill;
