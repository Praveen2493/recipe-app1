import React, { useEffect, useState } from 'react'
import { filterByCategory, getMeals, searchMeals } from '../services/mealApi';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';

function Home() {

    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState (false);
    const [searchQuery, setSearchQuery] = useState("")
    const [category, setCategory] = useState("") 


    useEffect(()=> {
        fetchMeals();
        handleSearch('chicken');
    },[])

    useEffect(() => {
    fetchData();
}, [searchQuery, category]);


    const fetchMeals = async () => {
        try {
            const response = await getMeals();
            setMeals(response.data.meals);
        } catch (error) {
            console.error("Error fetching Data:", error);
        }finally{
            setLoading(false);
        }
    }


    const fetchData = async () => {
        try {
            setLoading(true);

            let response;

            if (searchQuery) {
                response = await searchMeals(searchQuery);
            } else if (category) {
                response = await filterByCategory(category);
            } else {
                response = await searchMeals("chicken");
            }

            setMeals(response.data.meals || []);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };


    const handleSearch = async (query) => {
        try {
               const response = await searchMeals(query)
               setMeals(response.data.meals || []) 
        } catch (error) {
            console.error("fetching error:", error)
        } finally {
            setLoading(false);
        }

    setSearchQuery(query);
    }

    const handleFilter = (cat) => {
        setCategory(cat);
    }


   



  return (
    <div className='text-center'>

        <SearchBar onSearch = {handleSearch}/>

        <Filter onFilter = {handleFilter}/>
        {
            loading ? (
                <p className='text-center'> loading.... </p>
            ) : meals.length === 0 ? (

                <p className="text-center">No recipes found</p>
            ):(

                <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                { meals.map((meal) => (
                    <RecipeCard key={meal.idMeal} meal={meal}/>
                ))}
                </div>
            )}

        
    </div>
  )
}

export default Home
