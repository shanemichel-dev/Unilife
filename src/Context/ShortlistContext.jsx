import { useState, createContext, useEffect } from "react";

export const ShortlistContext = createContext();

export default function ShortlistContextProvider(props) {
    //create global state
    const [shortlist, setShortlist] = useState([]);

    useEffect(
        ()=> {
            // check local storage for initial value
            const storedShortlist = localStorage.getItem('shortlist')
            if (storedShortlist) {
                // use this value to initialize state
                setShortlist(JSON.parse(storedShortlist))
            }
        }, [] //run once 
    )
    

    useEffect(
        ()=> {
            // save state to local storage
            localStorage.setItem('shortlist', JSON.stringify(shortlist))
        }, [shortlist] 
    )

    const addProperty = (propertyToAdd) => {
        
        // add this object to favorites
        // let newFavorites = [...favorites, charToAdd]
        setShortlist([...shortlist, propertyToAdd]);
    }

    const removeProperty = (propertyId) => {
        // remove from favorites
        setShortlist(shortlist.filter(item => item._id !== propertyId))
    }

    return(
        <ShortlistContext.Provider value={{shortlist, addProperty, removeProperty}}>
            {props.children}
        </ShortlistContext.Provider>
    )
}