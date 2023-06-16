import { createContext, useState } from "react";
import { useEffect } from "react";

export const CustomContext = createContext();

export const Context = (props) => {

    const [user, setUser] = useState({});
    const [favorite, setFavorite] = useState([]);

    const addFavorite = (item, select, event) => {
        event.preventDefault();

        if(!select){
            setFavorite(prev => [...prev, item])
        }        
    }

    const remoteFavorite = (id, event) => {
        event.preventDefault();

        setFavorite(prev => prev.filter(item => item.id !== id));
    }


    useEffect(() => {
        if(localStorage.getItem("user") !== null){
            setUser(JSON.parse(localStorage.getItem("user")))
        }
        if(localStorage.getItem("favorites") !== null){
            setFavorite(JSON.parse(localStorage.getItem("favorites")))
        }
        
    }, [])
    
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorite));
    }, [favorite])

    const value = {
        user, setUser,
        favorite, setFavorite,
        addFavorite, remoteFavorite
    }

    return <CustomContext.Provider value={value}>
        {
            props.children
        }
    </CustomContext.Provider>
}