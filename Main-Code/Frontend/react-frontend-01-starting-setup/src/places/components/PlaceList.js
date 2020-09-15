import React from "react";

import "./PlaceList.css";

import Card from "../../shared/components/UIElements/Card.js";
import PlaceItem from "./PlaceItem.js";

const PlaceList = (props) => {
  if (props.item.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found, maybe create one?</h2>
          <button>Share Places</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.item.map((place) => {
        return (
          <PlaceItem
            key={place.id}
            id={place.id}
            image={place.imageUrl}
            title={place.title}
            description={place.description}
            address={place.address}
            creatorId={place.creator}
            coordinates={place.location}
          />
        );
      })}
    </ul>
  );
};

export default PlaceList;
