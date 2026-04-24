import React from 'react'
import { useNavigate } from 'react-router-dom'

function RecipeCard({meal}) {

    const navigate = useNavigate();

  return (
    <div onClick={()=>navigate(`/recipe/${meal.idMeal}`)}  className='bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:scale-105 transition duration-300'>
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
