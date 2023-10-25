import { useState } from "react";
import { Button } from "./App";

export function AddBill({ setBillOpen, curFrnd, initFrnds, setInitFrnds }) {
  const [amt, setAmt] = useState("");
  const [paid, setPaid] = useState("");
  const [paidBy, setPaidBy] = useState("you");

  function updateArray(id, value) {
    const updatedArray = initFrnds.map((item) => {
      if (item.name === id) {
        return { ...item, balance: item.balance + value };
      } else {
        return item;
      }
    });
    setInitFrnds(updatedArray);
  }

  return (
    <form className="form-split-bill">
      <h2>Split Bill with X</h2>
      <label>💸 Bill amount</label>
      <input
        type="text"
        value={amt}
        placeholder="Enter amt"
        onChange={(e) => setAmt(e.target.value)}
      ></input>
      <label>🍕 You spent</label>
      <input
        type="text"
        value={paid}
        placeholder="Enter amt"
        onChange={(e) => setPaid(e.target.value)}
      ></input>
      <label>☕️ {curFrnd} spent</label>
      <input disabled type="text" value={amt - paid}></input>
      <label>😶‍🌫️ Was Paid By</label>
      <select
        className="select"
        defaultValue={paidBy}
        onChange={(e) => setPaidBy(e.target.value)}
      >
        <option value="you">You</option>
        <option value="friend">Friend</option>
      </select>

      <Button
        onClickFunc={() => {
          updateArray(curFrnd, amt - paid);
          setBillOpen(false);
        }}
      >
        Addd
      </Button>
    </form>
  );
}
