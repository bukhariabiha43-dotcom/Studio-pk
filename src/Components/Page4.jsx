import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import VideoFiltr from './VideoFiltr';
import { useContext } from 'react';
import { SearchContext } from './SearchContext';
const Page4 = () => {
  const { search } = useContext(SearchContext);
  const [pakVideo, setPakVideo] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const navigate = useNavigate();

  useEffect(() => {
    const reveApi = async () => {
      try {
        const response = await fetch('https://picsum.photos/v2/list?page=6&limit=12');
        const dataRcv = await response.json();

        setPakVideo(dataRcv)
      } catch (error) {
        console.log(error)

      } finally {
        setLoading(false)
      }
    };
    reveApi();

  },
    []);
  
  if (loading) {
     return <h1 className ='font-semibold text-green-500 text-center' > Page Loading Please wait </h1 >
  }
  
  return ( <VideoFiltr
      data={pakVideo}
      search={search}
      navigate={navigate}
  />
  )
}

export default Page4