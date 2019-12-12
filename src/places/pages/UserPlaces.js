import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        imageUrl: 'https://lh3.googleusercontent.com/pmCynpia5VxI5awKXuc3pyyb1T_fYFWnVsRLDuD8iysnoXOdRMpeZ8w3EyUTg9WOrFxVYYsdNNxBgLqg7g=h400-no',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484445,
            lng: -73.9878531
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        imageUrl: 'https://lh3.googleusercontent.com/pmCynpia5VxI5awKXuc3pyyb1T_fYFWnVsRLDuD8iysnoXOdRMpeZ8w3EyUTg9WOrFxVYYsdNNxBgLqg7g=h400-no',
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484445,
            lng: -73.9878531
        },
        creator: 'u2'
    }
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaced = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaced}/>
};

export default UserPlaces;