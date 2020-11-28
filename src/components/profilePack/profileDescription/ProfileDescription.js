import React from "react";
import PropTypes from "prop-types";
import s from "./ProfileDescription.module.css";

const ProfileDescription = ({ name, tag, location, avatar }) => {
  return (
    <div className={s.container}>
      <img src={avatar} alt="user avatar" className={s.avatar} />
      <p className={s.name}>{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
  );
};

ProfileDescription.defaultProps = {
  avatar: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
};

ProfileDescription.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default ProfileDescription;
