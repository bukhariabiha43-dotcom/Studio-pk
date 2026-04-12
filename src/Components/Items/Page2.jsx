import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import VideoFiltr from '../VideoFiltr';
import { useContext } from 'react';
import { SearchContext } from '../SearchContext';
const Page2 = () => {
  const { search } = useContext(SearchContext);
  const [indainVideo, setIndainVideo] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const rcvData = async () => {
      try {
        const res = await fetch('https://picsum.photos/v2/list?page=7&limit=100');
        const data = await res.json();
        setIndainVideo(data)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    };
    rcvData();
    
  },
    []);
  if (loading) {
     return <h2 className='text-green-500 text-center font-semibold'>Page Loading please Wait..</h2>
  }
  return (
    <VideoFiltr
      data={indainVideo}
      search={search}
      navigate={navigate}
    />
  )
}

export default Page2;