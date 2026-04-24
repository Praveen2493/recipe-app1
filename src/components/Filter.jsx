import React, { useEffect, useState } from 'react'
import { getCategories } from '../services/mealApi';

function Filter({onFilter}) {

const [categories, setCategories] = useState([]);

useEffect(()=> {
    fetchCategories();
},[])


const fetchCategories = async () => {
    try {
        const response = await getCategories();
        setCategories(response.data.categories);
    } catch (error) {
        console.error(error);
    }
}


  return (
    <div className='flex justify-center mb-6'>
        <select onChange={(e)=>onFilter(e.target.value)} className='border py-2 px-4 rounded'>
            <option value="">All Categories</option>
            {categories.map((cat) => (
                <option key={cat.idCategory} value={cat.strCategory}>{cat.strCategory}</option>
            ))}
            
        </select>
    </div>
  )
}

export default Filter
