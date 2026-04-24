import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getMealById } from '../services/mealApi';

function RecipeDetails() {

    const {id} = useParams()
    const navigate = useNavigate();

    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        fetchMealDetails();
        
    },[id])


    const fetchMealDetails = async () => {
        try {
            const response = await getMealById(id)
            setMeal(response.data.meals[0]);
        } catch (error) {
            console.error("Error fetching meal detail:",error);
        }finally{
            setLoading(false);
        }

    }

    //console.log(meal);


    const getIngredients = (meal) => {
        let Ingradients = [];

        for (let i = 0; i <= 20; i++) {
            const gradient = meal[`strIngredient${i}`];
            const meansure = meal[`strMeasure${i}`];

            if(gradient && gradient.trim() !== ""){
                Ingradients.push(`${gradient} - ${meansure}`)
            }
            
        }

        return Ingradients;
    }


    if(loading) return <p className='text-center mt-10'>loading....</p>

    if(!meal) return <p className='text-center mt-10'>Recipe not Found</p>

  return (
    <div className='p-6 max-w-4xl mx-auto bg-gray-200 shadow-md'>
        <button 
        onClick={()=> navigate("/")}
        className='px-4 py-2 rounded bg-gray-900 text-white mb-5'
        >← Back</button>
        <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className='w-50 rounded-xl mb-6'
        />

        <h1 className='text-2xl font-bold mb-2'>{meal.strMeal}</h1>
        <p className='text-gray-700 mb-5'>{meal.strCategory}</p>

        <h2 className='text-1xl font-bold mb-2'>Ingradients</h2>
        <ul className='mb-5'>
            {getIngredients(meal).map((item,index)=>
                 <li key={index}>{item}</li>
            )}
           
        </ul>

        <h2 className='text-1xl font-bold mb-2'>Instructions</h2>
        <p className='text-gray-700 mb-5'>{meal.strInstructions}</p>

        <div>
            <h2 className='text-1xl font-bold mb-2'>Title</h2>
            {meal.strYoutube && (
                <iframe
            width="100%"
            height="400"
            src={meal.strYoutube.replace("watch?v=", "embed/")}
            title='recipe-video'
            allowFullScreen
            className='rounded-lg' 
            >
            </iframe>
            )}
            
        </div>

    </div>
  )
}

export default RecipeDetails
