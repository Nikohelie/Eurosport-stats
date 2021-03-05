import React, { createContext, useEffect, useState,  } from 'react';
import axios from 'axios';
const API_URL = 'https://eurosportdigital.github.io/eurosport-backend-react-developer-recruitment/headtohead.json';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [players, setPlayers] = useState();

    useEffect(()=> {
        axios.get(API_URL)
            .then(response => {
                setPlayers(response.data.players);
                })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <DataContext.Provider value={players}>
            {props.children}
        </DataContext.Provider>
    )
}