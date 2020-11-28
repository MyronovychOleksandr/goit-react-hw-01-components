import React from "react";
import ProfileDescription from "../profileDescription/ProfileDescription";
import ProfileList from "../profileList/ProfileList";
import s from "./Profile.module.css";

const Profile = ({ name, tag, location, stats, avatar }) => {
  return (
    <div className={s.container}>
      <ProfileDescription
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <ProfileList {...stats} />
    </div>
  );
};

export default Profile;
