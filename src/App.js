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
  const [friends, setFriends] = useState(initialFriends);
  const [displayFriend, setDisplayFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  // const result = addFriend;

  function handleDisplayFriend() {
    setDisplayFriend((displayFriend) => !displayFriend);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setDisplayFriend(false);
  }

  function handleSelection(friend) {
    setSelectedFriend(friend);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <List friend={friends} onSelection={handleSelection} />
        {displayFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleDisplayFriend}>
          {!displayFriend ? "Add Friend" : "Close"}
        </Button>
        {/* <Button>Close</Button> */}
      </div>
      {selectedFriend && <SplitBill selectedFriend={selectedFriend} />}
    </div>
  );
}

function List({ friend, onSelection }) {
  return (
    <div key={friend.id}>
      {friend.map((el) => (
        <Friend friendData={el} key={el.id} onSelection={onSelection} />
      ))}
    </div>
  );
}

function Friend({ friendData, onSelection }) {
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
      <Button onClick={() => onSelection(friendData)}>Select</Button>
    </li>
  );
}
