import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { filterMovies } from "../store/movie";

export default function Search() {
  const [search,setSearch]=useState('')
  const {data,filterData}=useSelector(state=>state.movie)
  const dispatch=useDispatch()
  console.log(filterData)
 

  const handleSearch=e=>{
    setSearch(e.target.value)
    dispatch(filterMovies(e.target.value))
    
    
  }
  return (
    <div className='container mx-auto bg-black'>
      <div className="relative ">
        <div className='flex items-center py-7 gap-x-1  '>
          <input type="text" value={search} onChange={handleSearch} placeholder='Search' className="flex-1 text-black border py-3 px-2 font-medium rounded-md focus:border-indigo-500 border-zinc-300 outline-none " />
          <button className=" p-4 bg-indigo-500 text-white rounded-full disabled:bg-red-600" disabled={!search} ><FaSearch className="text-lg" /></button>
        </div>
        {filterData.length<20 || filterData.length>0 && (
          <div className="absolute -bottom-2 bg-white text-black w-full p-1 right-0 rounded-md">
          ssa
        </div>
        )}
        
      </div>
      
    </div>
  )
}
