import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import VideoFiltr from '../VideoFiltr';
import { useContext } from 'react';
import { SearchContext } from '../SearchContext';

const Page1 = () => {
  const { search } = useContext(SearchContext);
  const [sofiVideo, setSofiVideo] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://picsum.photos/v2/list?page=3&limit=100');
        const data = await response.json();
        setSofiVideo(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <h2 className='text-green-500 text-center font-semibold'>
        Page Loading please Wait..
      </h2>
    );
  }

  // ✅ Sirf VideoFiltr use hoga (map hata diya)
  return (
    <VideoFiltr
      data={sofiVideo}
      search={search}
      navigate={navigate}
    />
  );
}

export default Page1;