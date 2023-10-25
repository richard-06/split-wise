import { useState } from "react";
import { createPortal } from "react-dom";
import { AddBill } from "./AddBill";
import { AddFrndForm } from "./AddFrndForm";
import { Friend } from "./Friend";
import "./index.css";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [isBillOpen, setBillOpen] = useState(false);
  const [isAddOpen, setAddOpen] = useState(false);
  const [initFrnds, setInitFrnds] = useState([...initialFriends]);
  const [curFrnd, setCurFrnd] = useState(null);
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          initFrnds={initFrnds}
          setCurFrnd={setCurFrnd}
          setBillOpen={setBillOpen}
        />
        <AddFrndForm
          isAddOpen={isAddOpen}
          setAddOpen={setAddOpen}
          initFrnds={initFrnds}
          setInitFrnds={setInitFrnds}
        />
        <Button
          onClickFunc={() => {
            setAddOpen(!isAddOpen);
          }}
        >
          {isAddOpen ? "Close" : "Add Friend"}
        </Button>
      </div>
      {isBillOpen && (
        <AddBill
          initFrnds={initFrnds}
          setBillOpen={setBillOpen}
          curFrnd={curFrnd}
          setInitFrnds={setInitFrnds}
        />
      )}
    </div>
  );
}

function FriendsList({ initFrnds, setCurFrnd, setBillOpen }) {
  return (
    <ul>
      {initFrnds.map((item) => (
        <Friend
          setCurFrnd={setCurFrnd}
          setBillOpen={setBillOpen}
          friend={item}
          key={item.id}
        />
      ))}
    </ul>
  );
}

export function Button({ children, onClickFunc }) {
  return (
    <div>
      <button onClick={onClickFunc} className="button">
        {children}
      </button>
    </div>
  );
}
