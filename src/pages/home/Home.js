import React, {  useContext, useEffect, useState, useCallback } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import MediaCard from '../../components/Card';
import { DataContext } from '../../components/context/DataProvider'

const Button = React.memo(function Button({onClick, clickable, children}) {
    return <button disabled={clickable} onClick={onClick}>
        {children}
        </button>
  })


export default function Home() {
    const players = useContext(DataContext)
    const [index, setIndex] = useState(0);
    const [currentPlayer, setCurrentPlayer] = useState(undefined);

    useEffect(() => {
        console.log(index);
        console.log(players)
        if(players){
            setCurrentPlayer(players[index])
        }
    }, [players, index])

    const changeIndex = btnClick => {
        if(btnClick === 'PREVIOUS') {
            setIndex(i => i - 1);
        } else if(btnClick === 'NEXT') {
            setIndex(i => i + 1);
        }
        setCurrentPlayer(players[index])
    }

    
    return (
        <div className="home">
            
            {currentPlayer ? (
                <>
                <Button onClick={() => changeIndex('PREVIOUS')} clickable={index===0}>
                    <FaArrowLeft size='5em'/>
                </Button>
                <MediaCard data={currentPlayer}/>
                <Button onClick={() => changeIndex('NEXT')} clickable={index===1}>
                    <FaArrowRight size='5em'/>
                </Button>
            </>
            ) : null
            } 
               
        </div>
    )
}