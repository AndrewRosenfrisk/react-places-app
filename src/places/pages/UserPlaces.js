import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: "Empire State Building",
        description: "The empire state building...",
        imageUrl: "https://www.rockettes.com/wp-content/uploads/sites/2/2016/06/empire-state-building-nys.jpg",
        address: "20 W 34th St, New York, NY 10001",
        coordinates: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u1'

    },
    {
        id: 'p2',
        title: "Empire State Building",
        description: "A second instance by a different user.",
        imageUrl: "https://www.newyorkfamily.com/wp-content/uploads/2020/08/fp-Empire-state-building-2020-09-799x1200.jpg",
        address: "20 W 34th St, New York, NY 10001",
        coordinates: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'

    }
]

const UserPlaces = (props) => {
const {userId} = useParams()
const loadedPlaces  = DUMMY_PLACES.filter(place => place.creator === userId);

    return <PlaceList items={loadedPlaces}/>
}

export default UserPlaces