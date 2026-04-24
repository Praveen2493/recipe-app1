import React, { useEffect, useState } from 'react'

function SearchBar({onSearch}) {

    const [query, setQuery] = useState("")


    useEffect(()=> {
        const delayDebounce = setTimeout(()=> {
                onSearch(query);
        }, 500);
        return ()=> clearTimeout(delayDebounce);
    },[query])


  return (
    <div className='flex gap-3 mb-4 justify-center'>
        <h1 className='text-2xl font-bold items-center'>Search:</h1>
        <input type='text'
        placeholder='Search meals...'
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
        }}
        className='w-64 py-2 px-4 border'
        />

        {/* <button onClick={handleSearch} className='bg-green-400 text-white py-2 px-4 rounded cursor-pointer'>Search</button> */}
    </div>
  )
}

export default SearchBar
