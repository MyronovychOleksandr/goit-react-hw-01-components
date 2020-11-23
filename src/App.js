import React from "react";
import Profile from "./components/profilePack/profile/Profile";
import Statistics from "./components/statisticPack/statistic/Statistics";
import user from "./user.json";
import statisticalData from "./statistical-data.json";
import friends from "./friends.json";
import FriendList from "./components/friendsPack/FriendList";
import TransactionHistory from "./components/transaction/TransactionHistory";
import transactions from "./transactions.json";

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <hr></hr>
      <Statistics title="Upload stats" stats={statisticalData} />
      <hr></hr>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
