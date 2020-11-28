import React from "react";
import PropTypes from "prop-types";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.container}>
      {friends.map(({ isOnline, id, avatar, name }) => (
        <li className={s.item} key={id}>
          <span className={isOnline ? s.available : s.notAvailable}></span>
          <img className={s.avatar} src={avatar} alt={name} width="48" />
          <p className="name">{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
