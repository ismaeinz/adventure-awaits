import React from "react";
import { Link } from "react-router-dom";

const CardItem = ({ src, text, path, label }) => {
  return (
    <div>
      <li className="cards__items">
        <Link className="cards__item__link" to={path}>
          <figure className="cards__item__pic-wrap" data-category={label}>
            <img src={src} alt="Travel" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{text}</h5>
          </div>
        </Link>
      </li>
    </div>
  );
};
export default CardItem;
