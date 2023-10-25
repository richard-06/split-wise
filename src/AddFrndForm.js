import { useState } from "react";
import { Button } from "./App";

export function AddFrndForm({
  isAddOpen,
  setAddOpen,
  initFrnds,
  setInitFrnds,
}) {
  const [name, setName] = useState("");
  const [imgLink, setImgLink] = useState("");
  let newFrnd = {
    id: 3232,
    name: name,
    image: imgLink,
    balance: 0,
  };
  function addFrnd() {
    setInitFrnds((item) => [...item, newFrnd]);
    setName("");
    setImgLink("");
    setAddOpen(false);
  }

  function onSub(e) {
    console.log("onsub");
    e.preventDefault();
    // setInitFrnds((item) => {
    //   [...item];
    // });
    setName("");
    setImgLink("");
    setAddOpen(false);
    console.log("onsub");
  }
  if (isAddOpen)
    return (
      <form className="form-add-friend" onSubmit={addFrnd}>
        <label>😎Name</label>
        <input
          placeholder="Enter your friend name"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
        <label>🏞️Img Link </label>
        <input
          placeholder="Enter the image URL"
          type="text"
          onChange={(e) => setImgLink(e.target.value)}
          value={imgLink}
        ></input>
        <Button onClickFunc={addFrnd}> Add</Button>
      </form>
    );
  return;
}
