import React from 'react';

import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: "Zerun",
            image: 'https://zeruntian.com/img/selfie.png',
            places: 3
        }
    ];

    return <UsersList items={USERS}/>;
};

export default Users;