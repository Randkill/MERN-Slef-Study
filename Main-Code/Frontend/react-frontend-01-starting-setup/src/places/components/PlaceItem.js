import React from "react";

import "./PlaceItem.css";

import Button from '../../shared/components/FormElements/Button.js';
import Card from "../../shared/components/UIElements/Card.js";

const PlaceItem = (props) => {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="place-item__info">
          <h2>{props.title}</h2>
          <h3>{props.children}</h3>
          <p>{props.description}</p>
        </div>
        <div className="place-item__actions">
          <Button inverse={true}>VIEW ON MAP</Button>
          <Button to={`/places/${props.id}`}>EDIT</Button>
          <Button danger={true}>DELETE</Button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
