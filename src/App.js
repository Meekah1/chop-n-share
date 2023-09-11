// import FriendList from "./FriendList";
import FriendList from "./FriendList";

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

export default function App({ data = { initialFriends } }) {
  return (
    <div className="app">
      <div className="sidebar">
        {/* <FriendList data={data} /> */}
        <List />
      </div>
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
      ) : (
        <p className="none"></p>
      )}
    </li>
  );
}
