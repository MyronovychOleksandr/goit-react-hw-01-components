import React from "react";
import PropTypes from "prop-types";
import s from "./ProfileList.module.css";

const ProfileList = ({ followers, views, likes }) => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <span className={s.label}>Followers </span>
        <span className={s.quantity}>{followers}</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>Views </span>
        <span className={s.quantity}>{views}</span>
      </li>
      <li className={s.item}>
        <span className={s.label}>Likes </span>
        <span className={s.quantity}>{likes}</span>
      </li>
    </ul>
  );
};

ProfileList.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default ProfileList;
