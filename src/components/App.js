import React from "react";

import Profile from "./profilePack/profile/Profile";
import Statistics from "./statisticPack/statistic/Statistics";
import FriendList from "./friendsPack/FriendList";
import TransactionHistory from "./transaction/TransactionHistory";

import user from "../data/user.json";
import friends from "../data/friends.json";
import statisticalData from "../data/statistical-data.json";
import transactions from "../data/transactions.json";

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
