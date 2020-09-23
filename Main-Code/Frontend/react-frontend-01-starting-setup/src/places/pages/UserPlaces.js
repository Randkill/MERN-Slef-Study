import React from "react";
import PlaceList from '../components/PlaceList.js';

import { useParams } from 'react-router-dom'

const Dummy_places = [
  {
    id: "p1",
    title: "Santa Monica State Beach",
    descrption: "Los Angles` great beach!",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipM6xDOeWIcPIugQfQYqIn7y8yWxsbyQDx6oPgd-=w408-h306-k-no",
    addess: "California, United States",
    location: {
      lat: 34.0106946,
      lng: -118.5176967,
    },
    creator: "u1",
  },
  {
    id: "p1",
    title: "Santa Monica State Beach",
    descrption: "Los Angles` great beach!",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipM6xDOeWIcPIugQfQYqIn7y8yWxsbyQDx6oPgd-=w408-h306-k-no",
    addess: "California, United States",
    location: {
      lat: 34.0106946,
      lng: -118.5176967,
    },
    creator: "u2",
  },
];

const UserPlaces = (props) => {
    const userId = useParams().userId
    const loadedPlaces = Dummy_places.filter((place) => {
      return (place.creator === userId);
    })

    return <PlaceList item={loadedPlaces}/>
};

export default UserPlaces;
