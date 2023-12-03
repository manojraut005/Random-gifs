import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {


  const {gif, loading, fetchData} = useGif();


  return (
    <div className='w-10/12 lg:w-1/2  bg-[#555555] rounded-lg border-y-2 border-teal-500
    flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl underline text-teal-500  uppercase font-bold'> A Random Gif</h1>

    {
        loading ? (<Spinner/>) : (<img src= {gif}  className='shadow-xl shadow-black mb-3 w-10/12 xl:w-[450px]' />)
    }

      

      <button onClick={() => fetchData()}
      className="w-10/12 bg-black text-lg text-teal-500 py-2 rounded-lg mb-[20px]">

       Generate

      </button>

    </div>
  )
}

export default Random
