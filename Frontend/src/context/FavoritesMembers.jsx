import React, { createContext, useEffect, useState } from 'react'

export const FavoritesMembers = createContext()

function FavoritesContextProvider({ children }) {
    let localFav = JSON.parse(localStorage.getItem("favorites"))
    let [favorites, setFavorites] = useState(localFav ? localFav : [])

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    const value = {
        favorites, setFavorites
    }

    return (
        <FavoritesMembers.Provider value={value}>
            {children}
        </FavoritesMembers.Provider>
    )
}

export default FavoritesContextProvider
