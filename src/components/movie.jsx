import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getMovieApi } from "../store/movie";

const apiImg=import.meta.env.VITE_API_IMAGE_URL


export default function Movie() {
   
    const dispatch=useDispatch()

    const {data,status}=useSelector(state=>state.movie)

    useEffect(()=>{
        dispatch(getMovieApi())
    },[])


   
    if(status==='fail'){
        return <div>Fail</div>
    }
    if(status==='loading'){
        return <div>Loading</div>
    }
    if(status==='success'){
        return (
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-2" >
                    {data && data.map(d=>(
                        <div key={d.id} className="w-30 h-50 bg-zinc-900 my-4  rounded-md group" >
                            <img src={`${apiImg}/${d.poster_path}`} className="rounded-md group-hover:scale-x-110 transition-all duration-300"  />
                            <div className="flex flex-col">
                                <h1 className="text-lg font-medium group-hover:text-xl  transition-all duration-200">{d.original_title}</h1>
                             
                                    <p className="flex gap-x-1 items-center">Imd:<FaStar className="text-yellow-300" />{d.vote_average} </p>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          )
    }


   
    
  
}
