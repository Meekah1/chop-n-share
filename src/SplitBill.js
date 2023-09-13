import React from "react";
import Button from "./Button";

function SplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>
      <label htmlFor="">💰Bill value</label>
      <input type="text" />
      <label htmlFor="">🧔🏽Your expenses</label>
      <input type="text" />
      <label htmlFor="">🧑🏻‍🤝‍🧑🏻X's Expenses</label>
      <input type="text" />

      <Button>Split bill</Button>
    </form>
  );
}

export default SplitBill;
