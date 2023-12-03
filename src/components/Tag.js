import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState('car');

  const {gif, loading, fetchData} = useGif(tag);


  return (
    <div className='w-10/12 lg:w-1/2 bg-[#555555] rounded-lg border-y-2 border-teal-500
    flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl text-teal-500 underline uppercase font-bold'> Random {tag} Gif</h1>

    {
        loading ? (<Spinner/>) : (<img src= {gif}  className=' shadow-black mb-2 shadow-xl w-10/12 xl:w-[450px]' />)
    }

      <input 
        className='w-10/12 text-lg py-2 bg-white  outline-black text-black font-bold rounded-lg mb-[3px] text-center'
        onChange={(event) =>  setTag(event.target.value)}
        
        placeholder='write here to generate...'
      />
      

      <button onClick={() => fetchData(tag)}
      className="w-10/12 bg-black text-teal-500 text-lg py-2 rounded-lg mb-[20px]">

       Generate

      </button>

    </div>
  )
}

export default Tag
