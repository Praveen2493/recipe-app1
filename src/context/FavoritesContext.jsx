import { Children, createContext, useEffect, useState } from "react";


export const FavoritesContext = createContext();


function FavoritesProvider({children}) {

    const [favorites, setFavorites] = useState([]);

    useEffect(()=> {
        const stored = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(stored);
    },[])

    useEffect(()=> {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    },[favorites])


    const addToFavorites = (meal) => {
        const exists = favorites.find((item)=> item.idMeal === meal.idMeal )
        if(!exists){
            setFavorites([...favorites, meal])
        }
    }

  const removeFromFavorites = (id) => {
        setFavorites(favorites.filter((item)=> item.idMeal !== id ))
  };


  const isFavorites = (id) => {
           return favorites.some((item)=> item.idMeal === id) 
  };


    return(
       <FavoritesContext.Provider value={{favorites, addToFavorites, removeFromFavorites, isFavorites}}>
        {children}
       </FavoritesContext.Provider>
    );
}


export default FavoritesProvider;