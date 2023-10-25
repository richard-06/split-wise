export function Friend({ friend, setCurFrnd, setBillOpen }) {
  return (
    <li>
      <img src={friend.image} alt="img"></img>
      <h3>{friend.name}</h3>

      <p
        style={
          friend.balance < 0
            ? { color: "red" }
            : friend.balance > 0
            ? { color: "green" }
            : {}
        }
      >
        {friend.balance < 0
          ? `you owe ${friend.name} ${-1 * friend.balance} pounds`
          : friend.balance > 0
          ? `${friend.name} owe's you ${friend.balance} pounds`
          : `You guys are even`}
      </p>
      <button
        className="button"
        onClick={() => {
          setCurFrnd(friend.name);
          setBillOpen(true);
        }}
      >
        Select
      </button>
    </li>
  );
}
