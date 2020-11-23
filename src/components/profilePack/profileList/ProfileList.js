import React from "react";
import PropTypes from "prop-types";
import styles from "./ProfileList.module.css";

const ProfileList = ({ followers, views, likes }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <span className={styles.label}>Followers </span>
        <span className={styles.quantity}>{followers}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>Views </span>
        <span className={styles.quantity}>{views}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>Likes </span>
        <span className={styles.quantity}>{likes}</span>
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
