import { Link } from "react-router-dom";
import "../Styles/Listitem.css";

const Listitem = ({ item }) => {
  return (
    <li className="listitem">
      <Link to={item?.href}>{item?.name}</Link>
    </li>
  );
};

export default Listitem;
