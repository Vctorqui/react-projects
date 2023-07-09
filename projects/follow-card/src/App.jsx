import React, { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  {
    userName: "victor",
    name: "Victor Quinones",
    isFollowing: true,
  },
  {
    userName: "summer",
    name: "Samar Chleiwit",
    isFollowing: false,
  },
  {
    userName: "Auronplay",
    name: "Raul",
    isFollowing: true,
  },
  {
    userName: "Midudev",
    name: "Miguel Duran",
    isFollowing: false,
  },
];

export function App() {
  //   const formatUserName = (userName) => `@${userName}`
  //   const [name, setName] = useState("victor");
  //   const changeName = () => {
  //     setName("summer");
  //   };

  return (
    <section className="App">
      {users.map((user) => {
        const { userName, name, isFollowing } = user;
        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
      {/* <TwitterFollowCard initialIsFollowing={true} userName='victor'>Victor Quinones</TwitterFollowCard> */}

      {/* <TwitterFollowCard userName='victor'>Victor Quinones</TwitterFollowCard>

      <TwitterFollowCard userName="midudev">
        Miguel Angel Duran
      </TwitterFollowCard>

      <TwitterFollowCard isFollowing userName="auronplay">Raul</TwitterFollowCard> */}

      {/* <button onClick={changeName}>
        Cambio de Nombre
        </button> */}
    </section>
  );
}
