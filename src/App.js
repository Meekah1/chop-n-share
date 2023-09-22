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
    // setSelectedFriend(friend);
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setDisplayFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <List
          friend={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />
        {displayFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleDisplayFriend}>
          {!displayFriend ? "Add Friend" : "Close"}
        </Button>
        {/* <Button>Close</Button> */}
      </div>
      {selectedFriend && (
        <SplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

function List({ friend, onSelection, selectedFriend }) {
  return (
    <div key={friend.id}>
      {friend.map((el) => (
        <Friend
          friendData={el}
          key={el.id}
          selectedFriend={selectedFriend}
          friend={friend}
          onSelection={onSelection}
        />
      ))}
    </div>
  );
}

function Friend({ friendData, onSelection, selectedFriend }) {
  const isSelected = selectedFriend && selectedFriend.id === friendData.id;
  // the following is the instructors code and it didn't work
  // const isSelected = selectedFriend.id === friendData.id

  return (
    <li className={isSelected ? "selected" : ""}>
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
      <Button onClick={() => onSelection(friendData)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
