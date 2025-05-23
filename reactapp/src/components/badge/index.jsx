import "./badge.css";
const Badge = (props) => {
  const { count } = props;
  let number = count > 999 ? "999+" : count;
  return <span className="badge">{number}</span>;
};

export default Badge;
