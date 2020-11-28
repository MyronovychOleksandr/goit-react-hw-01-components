import React from "react";
import s from "./Statistics.module.css";
import PropTypes from "prop-types";

function get_random_color() {
  let color = "";
  for (let i = 0; i < 3; i++) {
    let sub = Math.floor(Math.random() * 256).toString(16);
    color += sub.length === 1 ? "0" + sub : sub;
  }
  return "#" + color;
}

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={s.item}
            key={id}
            id={id}
            style={{
              backgroundColor: get_random_color(),
            }}
          >
            <span className="label">{label}</span>
            <span className="percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  percentage: 0,
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
