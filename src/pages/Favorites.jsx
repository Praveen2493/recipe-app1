import React, { useContext } from 'react'
import { FavoritesContext } from '../context/FavoritesContext'
import RecipeCard from '../components/RecipeCard';

function Favorites() {

    const {favorites} = useContext(FavoritesContext);

  return (
    <div className='p-6'>
      <h1 className='text-3xl font-black text-center mb-6'>Favorite Recipe</h1>

      { favorites.length === 0 ? (
         <p className="text-center">No favorites added</p>
      ) : (

       <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            { favorites.map((meal)=> (
                <RecipeCard key={meal.idMeal} meal={meal}/>
            )) }
       </div>
       )}
    </div>
  )
}

export default Favorites
