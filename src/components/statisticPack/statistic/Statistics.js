import React from "react";
import styles from "./Statistics.module.css";
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
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>
        {stats.map((stat) => (
          <li
            className={styles.item}
            key={stat.id}
            id={stat.id}
            style={{
              backgroundColor: get_random_color(),
            }}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
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
