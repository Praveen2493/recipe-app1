import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FavoritesContext } from '../context/FavoritesContext';

function RecipeCard({meal}) {

    const navigate = useNavigate();

    const { addToFavorites, removeFromFavorites, isFavorites } = useContext(FavoritesContext);

    const favorite = isFavorites(meal.idMeal);

    const handleFavorite = (e) => {
      e.stopPropagation();

      if (favorite) {
          removeFromFavorites(meal.idMeal)
      }
      else{
        addToFavorites(meal)
      }
    }

  return (
    <div onClick={()=>navigate(`/recipe/${meal.idMeal}`)}  className='bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:scale-105 transition duration-300'>

      <button onClick={handleFavorite} className='absolute top-2 right-2 text-2xl'>{favorite ? "❤️" : "🤍"}</button>

        <img src={meal.strMealThumb}
        alt={meal.strTags}
        className='w-full h-48 object-cover'
        />

        <div className='p-4'>
            <h2 className='text-lg font-semibold'>{meal.strMeal}</h2>
            <p className='text-sm text-gray-600'>{meal.strCategory}</p>
        </div>
    </div>
  )
}

export default RecipeCard
