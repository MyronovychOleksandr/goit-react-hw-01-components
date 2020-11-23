import React from "react";
import ProfileDescription from "../profileDescription/ProfileDescription";
import ProfileList from "../profileList/ProfileList";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, stats, avatar }) => {
  return (
    <div className={styles.container}>
      <ProfileDescription
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ProfileList
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </div>
  );
};

export default Profile;
