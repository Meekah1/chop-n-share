import { useState } from "react";
import Button from "./Button";
import FormAddFriend from "./FormAddFriend";
import SplitBill from "./SplitBill";

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
  const [displayAddFriend, setDisplayAddFriend] = useState(false);

  function handleAddFriend() {
    setDisplayAddFriend((displayAddFriend) => !displayAddFriend);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <List />
        {displayAddFriend && <FormAddFriend />}
        <Button onClick={handleAddFriend}>
          {!displayAddFriend ? "Add Friend" : "Close"}
        </Button>
        {/* <Button>Close</Button> */}
      </div>
      <SplitBill />
    </div>
  );
}

function List() {
  return (
    <div>
      {initialFriends.map((el) => (
        <Friend friendData={el} key={el.id} />
      ))}
    </div>
  );
}

function Friend({ friendData }) {
  return (
    <li>
      <img src={friendData.image} alt={friendData.name} />
      <h3>{friendData.name}</h3>

      {friendData.balance < 0 ? (
        <p className="red">
          You owe {friendData.name} {Math.abs(friendData.balance)}
        </p>
      ) : friendData.balance > 0 ? (
        <p className="green">
          {friendData.name} owe you {friendData.balance}
        </p>
      ) : friendData.balance === 0 ? (
        <p className="none">You and {friendData.name} are even.</p>
      ) : (
        <p>""</p>
      )}
      <Button>Select</Button>
    </li>
  );
}
