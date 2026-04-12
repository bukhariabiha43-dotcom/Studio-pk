import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import VideoFiltr from '../VideoFiltr';
import { useContext } from 'react';
import { SearchContext } from '../SearchContext';
const Page3 = () => {
  const {search} =  useContext(SearchContext)
  const [panjabiVideo, setPanjabiVideo] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    
    const dataReceve = async () => {
     try{
          const res = await fetch('https://picsum.photos/v2/list?page=8&limit=100');
          const data = await res.json();
          setPanjabiVideo(data);
    }catch (error) {
          console.log(error);

      } finally {
         setLoading(false)
      }
    };
    
      dataReceve();
  },
    []);
  
  if (loading) {
     return <h2 className='text-green-500 text-center font-semibold'>Page Loading please Wait..</h2>
  }

  return (
      <VideoFiltr
      data={panjabiVideo}
      search={search}
      navigate={navigate}
    />
  );
}

export default Page3